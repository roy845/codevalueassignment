import { Helmet } from "react-helmet";
import Topbar from "./Topbar";
import Footer from "./Footer";

type LayoutProps = {
  children?: React.ReactNode; // could use PropsWithChildren instead
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
};

export default function MainLayout({
  children,
  title,
  description,
  keywords,
  author,
}: LayoutProps): JSX.Element {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <div className="flex flex-col min-h-screen">
        <Topbar />
        <main className="flex-grow p-4">{children}</main>
        <Footer />
      </div>
    </>
  );
}
