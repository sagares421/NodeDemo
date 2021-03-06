const RESPONSES = {
  RECORDS_NOT_FOUND: {
    status: 200,
    success: true,
    message: "No records found!",
    data: null,
  },
  INTERNAL_ERROR(err) {
    return {
      status: 400,
      success: false,
      message: "Some thing went wrong!",
      error: err,
    };
  },
};

module.exports = RESPONSES;
