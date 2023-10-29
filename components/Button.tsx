interface ButtonProps {
  button: Button;
}
interface Button {
  name: string;
  colour: string;
  expiryTime: number;
}

export function Button({ button }: ButtonProps) {
  return (
    <button className={`bg-[${button.colour}] box-border text-slate-50`}>
      {button.name}
    </button>
  );
}
