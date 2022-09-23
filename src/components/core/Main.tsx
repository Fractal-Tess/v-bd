import cake from '../../assets/cake.png';
export default function Main() {
  return (
    <div className="flex-1 flex items-center justify-center flex-col space-y-8 text-5xl select-none">
      <h1>
        Happy birthday,{' '}
        <span className="text-primary-content bg-primary rounded-md px-4 py-2">
          Vangeli Daysanis
        </span>
        🥳
      </h1>
      <div className="max-w-2xl my-8">
        <img
          src={cake}
          alt=""
          style={{
            filter: 'drop-shadow(0px 20px 10px #532e11)'
          }}
        />
      </div>
      <h2>Want to go on a knowledge hunt?</h2>
    </div>
  );
}
