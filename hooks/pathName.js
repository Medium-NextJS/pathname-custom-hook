import { useRouter } from "next/router";

const PathName = () => {
  // destructuring asPath from next js useRouter hook to get the current path name
  const { asPath } = useRouter();

  // if path name returns slash it should be home
  if (asPath == "/") {
    var path = "home";
  } else {
    // spliting path to convert string into array
    var pathName = asPath.split("/");

    //removing empty array using filter and joining the path if have children with spaces
    var path = pathName.filter((p) => p != "").join(" ");
  }

  return [path];
};

export default PathName;
