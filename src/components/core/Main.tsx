import cake from '../../assets/cake.png';

export default function Main() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center flex-col space-y-8 text-5xl select-none ">
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
      </div>
      <p className="text-lg text-center">
        Oh and btw... I <span className="line-through">drew</span> baked this
        cake and created this website specially for you!
        <br />
        Might not seem much or professional but it from the heart &lt;3
        <br />
        You might want to scroll down a bit more, as I've prepared you a nice
        beginner friendly capture the flag game for you to rattle your brain on.
        <br />
        No rush, you can solve it whenever you want!
        <br />
        Now worries though, if you are stuck, just ask me and i'll provide you
        with some hints and explanations
      </p>
    </>
  );
}
