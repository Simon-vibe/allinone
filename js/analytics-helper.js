/**
 * Allinone.page Analytics Helper
 * Encapsulates GA4 event tracking logic for standardized metrics.
 */
const Analytics = {
    // Auto-detect tool ID from URL (e.g., /tools/pdf-to-excel/)
    getToolId: () => {
        const path = window.location.pathname;
        const match = path.match(/\/tools\/([^\/]+)\//);
        return match ? match[1] : 'root';
    },

    /**
     * 1. Tool Interaction (Funnel Analysis)
     * @param {string} stage - 'start' | 'processing' | 'complete'
     * @param {object} metadata - Additional info { method: 'click', fileType: 'pdf' }
     */
    logInteraction: (stage, metadata = {}) => {
        if (typeof gtag === 'undefined') return;

        gtag('event', 'tool_interaction', {
            'tool_id': Analytics.getToolId(),
            'action_stage': stage,
            ...metadata
        });
    },

    /**
     * 2. Tool Performance (Speed & Load)
     * @param {number} startTime - Date.now()
     * @param {number} inputSize - Input size in bytes or length
     */
    logPerformance: (startTime, inputSize = 0) => {
        if (typeof gtag === 'undefined') return;
        const duration = Date.now() - startTime;

        gtag('event', 'tool_performance', {
            'tool_id': Analytics.getToolId(),
            'processing_time_ms': duration,
            'input_size_kb': Math.ceil(inputSize / 1024)
        });
    },

    /**
     * 3. Tool Exception (Error Tracking)
     * @param {string} errorCode - Standardized error code
     * @param {string} message - Error details
     */
    logError: (errorCode, message) => {
        if (typeof gtag === 'undefined') return;

        gtag('event', 'tool_exception', {
            'tool_id': Analytics.getToolId(),
            'error_code': errorCode,
            'error_message': message,
            'fatal': false
        });
    }
};

// Expose globally
window.Analytics = Analytics;
