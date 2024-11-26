import ButtonInput from "@/components/ui/ButtonInput";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <h1>Hi</h1>
        <ButtonInput
          pending={false}
          text="Hi"
          type="button"
          variant="contained"
        />
      </main>
    </div>
  );
}
