import './App.css'
import { games } from './data'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        私のおすすめゲーム3選
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl">
        {games.map((game) => (
          <div
            key={game.id}
            className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
          >
            <img
              src={game.image}
              alt={game.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {game.name}
              </h2>
              <p className="text-gray-600 text-sm mb-4">
                {game.description}
              </p>
              <div className="text-sm font-semibold text-gray-700">
                おすすめ度：{game.rating}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App