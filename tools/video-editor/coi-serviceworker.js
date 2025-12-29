/*! coi-serviceworker v0.1.7 - Guido Zuidhof, licensed under MIT */
// From: https://github.com/gzuidhof/coi-serviceworker

if (typeof window === 'undefined') {
    self.addEventListener("install", () => self.skipWaiting());
    self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

    self.addEventListener("message", (ev) => {
        if (!ev.data) {
            return;
        } else if (ev.data.type === "deregister") {
            self.registration
                .unregister()
                .then(() => {
                    return self.clients.matchAll();
                })
                .then((clients) => {
                    clients.forEach((client) => client.navigate(client.url));
                });
        }
    });

    self.addEventListener("fetch", function (event) {
        if (event.request.cache === "only-if-cached" && event.request.mode !== "same-origin") {
            return;
        }

        event.respondWith(
            fetch(event.request)
                .then((response) => {
                    if (response.status === 0) {
                        return response;
                    }

                    const newHeaders = new Headers(response.headers);
                    newHeaders.set("Cross-Origin-Embedder-Policy", "require-corp");
                    newHeaders.set("Cross-Origin-Opener-Policy", "same-origin");

                    return new Response(response.body, {
                        status: response.status,
                        statusText: response.statusText,
                        headers: newHeaders,
                    });
                })
                .catch((e) => console.error(e))
        );
    });
} else {
    (() => {
        const reloadedBySelf = window.sessionStorage.getItem("coiReloadedBySelf");
        window.sessionStorage.removeItem("coiReloadedBySelf");
        const coiLoaded = window.sessionStorage.getItem("coiLoaded");
        window.sessionStorage.removeItem("coiLoaded");

        if (coiLoaded) {
            console.log("coi-serviceworker loaded");
            return;
        }

        if (window.navigator && window.navigator.serviceWorker && window.location.hostname !== 'localhost') {
            window.navigator.serviceWorker.getRegistration().then((registration) => {
                if (registration && registration.active) {
                    window.sessionStorage.setItem("coiLoaded", "true");
                    return;
                }

                window.sessionStorage.setItem("coiReloadedBySelf", "true");
                window.navigator.serviceWorker
                    .register(window.document.currentScript.src)
                    .then((registration) => {
                        console.log("coi-serviceworker registered", registration.scope);

                        registration.addEventListener("updatefound", () => {
                            console.log("coi-serviceworker update found", registration.scope);
                            const installingWorker = registration.installing;
                            installingWorker.addEventListener("statechange", () => {
                                if (installingWorker.state === "activated") {
                                    window.location.reload();
                                }
                            });
                        });
                    }, (err) => {
                        console.error("coi-serviceworker registration failed: ", err);
                    });
            });
        }
    })();
}
