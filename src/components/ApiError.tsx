import { AxiosError } from "axios";

const ApiError = ({ error }: { error: AxiosError | Error }) => {
  console.log(error);
  return (
    <h3 style={{ color: "#ff0000" }}>Oops! An error occurred. Is the service running?</h3>
  )
}

export default ApiError