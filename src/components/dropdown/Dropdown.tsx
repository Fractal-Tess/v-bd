import { useEffect, useState } from 'react';
import { Flag } from 'src/FlagHunt';

export default function Dropdown({ flagN, text, answer, hints }: Flag) {
  const storageFlag = `flag${flagN}`;
  const [show, setShow] = useState<boolean>(false);
  const [input, setInput] = useState<string>(
    localStorage.getItem(storageFlag) || ''
  );
  const [isAnswered, setIsAnswer] = useState<boolean>(
    !!localStorage.getItem(storageFlag)
  );

  const [shownHints, setShownHints] = useState<number>(0);

  useEffect(() => {
    console.log(input), [input];
  }, [input]);

  const submitAnswer = () => {
    if (input === answer) {
      setIsAnswer(true);
      localStorage.setItem(storageFlag, answer);
    }
  };

  const ShowNextHint = () => {
    setShownHints(shownHints + 1);
  };

  return (
    <>
      <div className="container flex flex-col justify-center items-center  space-y-8">
        <button
          onClick={() => setShow(!show)}
          className={`btn ${show ? '' : 'btn-outline'} btn-primary max-w-md `}
        >
          Flag {flagN}: {isAnswered && '✅'}
        </button>
        <div
          className={`${
            show ? 'scale-100 min-h-min h-[500px]' : 'scale-y-0 h-0'
          } w-full duration-1000 bg-neutral rounded-md overflow-hidden flex items-center justify-center flex-col p-8 space-y-4`}
        >
          <p className="p-8 font-light text-lg">{text}</p>
          <div className="form-control ">
            <label className="input-group input-group-lg">
              <span>Flag</span>
              <input
                onChange={e => {
                  setInput(e.target.value);
                }}
                value={input}
                type="text"
                className="input input-bordered input-md"
              />
              <button
                onClick={submitAnswer}
                className="btn btn-outline btn-primary"
              >
                Submit
              </button>
            </label>
          </div>
          <button
            onClick={ShowNextHint}
            className="btn btn-outline btn-primary w-fit"
          >
            Show Hint
          </button>

          {Array(shownHints)
            .fill(0)
            .map((_, i) => {
              return <p className="text-lg">{hints[i]}</p>;
            })}
        </div>
      </div>
    </>
  );
}
