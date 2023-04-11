# Get Cluster At Current Zoom

The `getClusterAtCurrentZoom` function is used to get the cluster at the current zoom. It takes a `number` as the first argument and a `Marker` as the second argument. It returns a `MarkerCluster` or `undefined`.

### Why do I need this function?

Think about a scenario where you have a Marker and this marker is inside a cluster and you want to open this cluster. You can use the `openCluster` function to open this cluster. But you need to pass the cluster as the second argument. So, you need to get this cluster. This is where the `getClusterAtCurrentZoom` function comes in.

**_"But I can get the parent of this marker and it will be the cluster!"_**

Hmm... No. The parent of a marker can be the cluster that contains this marker or the cluster that contains the cluster that contains this marker (recursively). So, you need to validate if the cluster is the correct cluster for the current map zoom.

### Example

You can check the [openCluster](/api/open-cluster.md#important-notes) function to see an example of how to use this function.
