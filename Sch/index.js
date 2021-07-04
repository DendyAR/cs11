const Graph = require('./function')

let g = new Graph();
g.addVertex("start");
g.addVertex("A");
g.addVertex("B");
g.addVertex("finish");

g.addEdge("start", "A", 6);
g.addEdge("start", "B", 2);
g.addEdge("A", "finish", 1);
g.addEdge("B", "A", 3);
g.addEdge("B", "finish", 5)
g.dijkstra("start");