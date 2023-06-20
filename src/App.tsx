import Button from "./shared/ui/Button/Button";

const App = () => {
  return (
    <div>
      <Button state="Secondary" type="button">
        CONTACT US
      </Button>
      <Button state="Primary" type="button">
        JOIN HYDRA
      </Button>
    </div>
  );
};

export default App;
