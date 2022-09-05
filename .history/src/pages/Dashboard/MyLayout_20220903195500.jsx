import * as React from "react";
import { Layout } from "react-admin";

import { MyAppBar } from "./MyAppBar";

 const MyLayout = (props) => <Layout {...props} appBar={MyAppBar} />;
