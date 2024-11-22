import Head from 'next/head';
import MessageWindow from './components/MessageWindow';
import ModelControl from './components/ModelControl';
import CodeDisplay from './components/CodeDisplay';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>AI Playground</title>
      </Head>

      <header className="bg-white shadow-sm p-4">
        <h1 className="text-3xl font-bold text-center">AI Playground</h1>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        <div className="col-span-2">
          <MessageWindow />
        </div>
        <div>
          <ModelControl />
          <CodeDisplay code="const greeting = 'Hello World';" language="javascript" />
        </div>
      </main>

      <footer className="text-center p-4 bg-white shadow-inner">
        <p>&copy; 2023 Sentient AI</p>
      </footer>
    </div>
  );
};

export default Home;
