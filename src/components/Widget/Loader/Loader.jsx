import React from "react";
import { ClipLoader } from "react-spinners";

export const Loader = ({ loading = true }) => (
  <ClipLoader color="pink" size={21} loading={loading} />
);