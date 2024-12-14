import { useState } from "react";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { CreateComponentModel } from "../components/CreateComponent";
import { PlusIcon } from "../icon/PlusIcon";
import { ShareIcon } from "../icon/ShareIcon";
import { useContent } from "../hooks/useContent";

function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  const contents = useContent();

  function onClick() {
    console.log("bdsg.,asxhuasygx");
  }

  return (
    <div className="bg-gray-300 h-full w-screen px-4 pr-60">
      <CreateComponentModel
        open={modalOpen}
        onClose={() => {
          setModalOpen(false);
        }}
      />
      <div className="flex justify-end gap-4 mr-4 py-4">
        <Button
          variant="secondery"
          size="md"
          startIcon={<ShareIcon size="lg" />}
          text="Share Brain"
          onClick={onClick}
        />
        <Button
          variant="primary"
          size="md"
          startIcon={<PlusIcon size="lg" />}
          text="Add Content"
          onClick={() => {
            setModalOpen(true);
          }}
        />
      </div>
      <div className="flex gap-4 flex-wrap">
        {Array.isArray(contents) && contents.length > 0 ? (
          contents.map(({ webLink, type, title }, index) => (
            <Card key={index} type={type} link={webLink} title={title} />
          ))
        ) : (
          <p>No content available</p>
        )}
      </div>
    </div>
  );
}

export default Home;
