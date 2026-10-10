import Hello from "@/components/Hello";

const HomePage = () => {

  return (
    <div>
      <h1 className="text-3xl bg-foreground text-background ">Welcome to NextJs</h1>
      <Hello />
    </div>
  );
};

export default HomePage;