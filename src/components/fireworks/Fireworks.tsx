type Props = {
  count: number;
};

export default function Fireworks({ count }: Props) {
  return (
    <>
      {Array(count)
        .fill(0)
        .map(_ => (
          <div className="firework"></div>
        ))}
    </>
  );
}
