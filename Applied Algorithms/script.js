function dijkstra(graph, start) {
    const distances = {};
    const visited = new Set();

    // Initialize distances
    for (const vertex in graph) {
        distances[vertex] = vertex === start ? 0 : Infinity;
    }

    // Dijkstra's algorithm
    while (true) {
        let minDistance = Infinity;
        let minVertex = null;

        // Find the unvisited vertex with the smallest distance
        for (const vertex in distances) {
            if (!visited.has(vertex) && distances[vertex] < minDistance) {
                minDistance = distances[vertex];
                minVertex = vertex;
            }
        }

        // If no unvisited vertex found, break the loop
        if (!minVertex) break;

        // Mark the current vertex as visited
        visited.add(minVertex);

        // Update distances to neighbors
        for (const neighbor in graph[minVertex]) {
            const distance = distances[minVertex] + graph[minVertex][neighbor];
            distances[neighbor] = Math.min(distances[neighbor], distance);
        }
    }

    return distances;
}

// Example graph
const graph = {
    'A': { 'B': 4, 'C': 2 },
    'B': { 'A': 4, 'C': 5, 'D': 10 },
    'C': { 'A': 2, 'B': 5, 'D': 3 },
    'D': { 'B': 10, 'C': 3 }
};

// Test the function
const shortestDistances = dijkstra(graph, 'A');
console.log(shortestDistances); // Output: { 'A': 0, 'B': 4, 'C': 2, 'D': 5 }
