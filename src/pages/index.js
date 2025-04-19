import { Redirect } from "@docusaurus/router";

// make default landing page as docs
export default function Home() {
  return <Redirect to="/frontend-tech-stack-doc/docs/category/html--css" />;
}
