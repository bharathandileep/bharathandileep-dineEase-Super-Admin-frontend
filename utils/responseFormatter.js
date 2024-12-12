function successResponse(statusCode, message, data = {}) {
    return {
        status: statusCode,
        message: message,
        data: data
    };
}

function errorResponse(statusCode, message) {
    return {
        status: statusCode,
        message: message,
        data: {}
    };
}

module.exports = {
    successResponse,
    errorResponse
};