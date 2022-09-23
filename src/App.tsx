import Header from '$components/core/Header';
import Main from '$components/core/Main';
import Theme from '$components/theme/Theme';

import Fireworks from '$components/fireworks/Fireworks';

function App() {
  return (
    <Theme>
      <div className="min-h-screen flex flex-col justify-between bg-gradient-to-b from-base-100 to-base-300 overflow-hidden">
        <Fireworks count={10} />
        <Header />
        <Main />
      </div>
    </Theme>
  );
}

export default App;
