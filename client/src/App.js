import './App.css';
import Graph from './components/Graph'
import Form from './components/Form'
function App() {
  return (
    <div className = "App">
      <div className = "container m-auto max-w-6xl text-center drop-shadow-lg text-gray-800">
        <h1 className="text-4xl py-6 m-10 bg-slate-800 text-white rounded">Expense Tracker</h1>
        {/* grid columns */}
        <div className="grid md:grid-cols-2 gap-4">
          {/* Chart */}
          <Graph />
          {/* Form */}
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
