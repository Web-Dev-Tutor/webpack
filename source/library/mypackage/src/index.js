import _ from "lodash";
import uuid from "uuid/v1";


export function cube(f) {
  return f * f * f;
}

export function square(f) {
  return f * f;
}

export function join(char) {
  return _.join(["cube", "square"], char);
}

export function getId() {
  return uuid();
}