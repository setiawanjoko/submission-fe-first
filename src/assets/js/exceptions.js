import Swal from "sweetalert2";

class ClientError extends Error {
  constructor(message) {
    super(message);

    this.name = "ClientError";
  }
}

class ServerError extends Error {
  constructor(message) {
    super(message);

    this.name = "ServerError";
  }
}

class ValidationError extends Error {
  constructor(message) {
    super(message);

    this.name = "ValidationError";
  }
}

export { ClientError, ServerError, ValidationError };
