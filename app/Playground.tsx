"use client";

import { useState } from "react";
import Editor from "@monaco-editor/react";
import { LiveProvider, LivePreview } from "react-live";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./resizable";

interface PlaygroundProps {
  code: string;
}

const Component = () => {
  return <div>Dima</div>;
};

export const Playground = ({ code: defaultCode }: PlaygroundProps) => {
  const [code, setCode] = useState(defaultCode);
  function handleOnChange(value?: string) {
    console.log("value", value);
    setCode(value || "");
  }
  return (
    <div className="bg-white h-screen">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel>
          <div className="bg-[#1e1e1e] py-6">
            <Editor
              className="h-screen"
              defaultLanguage="javascript"
              defaultValue={code.trim()}
              theme="vs-dark"
              options={{
                fontSize: 14,
                minimap: {
                  enabled: false,
                },
                contextmenu: false,
              }}
              onChange={handleOnChange}
            />
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel>
          <div className="flex max-w-3xl text-[#EF46BC] m-auto align-center items-center justify-center p-6">
            <LiveProvider code={code} scope={{ Component }} noInline={true}>
              <LivePreview />
            </LiveProvider>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};
