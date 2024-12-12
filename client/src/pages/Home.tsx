import { useState } from "react";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { CreateComponentModel } from "../components/CreateComponent";
import { PlusIcon } from "../icon/PlusIcon";
import { ShareIcon } from "../icon/ShareIcon";

function Home() {
  const [modalOpen, setModalOpen] = useState(false);
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
      <div className="flex gap-4">
        <Card
          title="Project Ideas"
          link="https://www.youtube.com/embed/cXtiz4yCKFM?si=ml6Xs-Bc7XxAbRRV"
          type="video"
        />
        <Card
          title="Ths is a tweet"
          link="https://x.com/altiamkabir/status/1866758023789809800"
          type="tweet"
        />
      </div>
    </div>
  );
}

export default Home;
