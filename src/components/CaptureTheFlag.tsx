import { FlagHuntData } from '../FlagHunt';
import Dropdown from './dropdown/Dropdown';

export default function CaptureTheFlag() {
  return (
    <div className="flex flex-col items-center my-40">
      <h2 className="font-bold text-3xl mb-10">
        Want to go on a knowledge hunt?
      </h2>
      {FlagHuntData.map((flag, i) => (
        <Dropdown key={i} {...flag} />
      ))}
    </div>
  );
}
