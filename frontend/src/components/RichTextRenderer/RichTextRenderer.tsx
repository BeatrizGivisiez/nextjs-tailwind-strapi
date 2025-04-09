import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface RichTextRendererProps {
  content: string;
}

const RichTextRenderer: React.FC<RichTextRendererProps> = ({ content }) => {
  const renderers = {
    h3: (props: any) => (
      <h3 className="heading-xl font-semibold lineHeight-2rem" {...props} />
    ),
    img: (props: any) => (
      <img className="shadow-sm aspect-[5/2] object-cover h-full" {...props} />
    ),
    p: (props: any) => (
      <p className="lineHeight-2rem text-justify" {...props} />
    ),
    a: (props: any) => <a className="link link-primary" {...props} />,
    pre: ({ children, className }: any) => {
      return (
        <div className="mockup-code w-full">
          <pre>
            <code className={className}>{children}</code>
          </pre>
        </div>
      );
    },
  };

  return (
    <div className="rich-text flex flex-col gap-4">
      <ReactMarkdown
        children={content}
        remarkPlugins={[remarkGfm]} // Enable GFM for tables, task lists, etc.
        components={renderers} // Define custom components
      />
    </div>
  );
};

export default RichTextRenderer;
