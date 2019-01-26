import freesewing from "freesewing";

var pathDivide = {
  draft: function(part) {
    // prettier-ignore
    let {Point, points, Path, paths, Snippet, snippets, macro} = part.shorthand();

    points.A = new Point(55, 40);
    points.B = new Point(10, 70);
    points.BCp2 = new Point(40, 20);
    points.C = new Point(90, 60);
    points.CCp1 = new Point(50, -30);
    points.D = new Point(50, 80);
    points.DCp1 = new Point(140, 50);

    paths.example = new Path()
      .move(points.A)
      .line(points.B)
      .curve(points.BCp2, points.CCp1, points.C)
      .curve(points.DCp1, points.DCp1, points.D)
      .close();

    let i = 1;
    for (let p of paths.example.divide()) {
      paths[i] = p.attr(
        "style",
        `stroke-width: 4; stroke-opacity: 0.5; stroke: hsl(${i *
          70}, 100%, 50%)`
      );
      i++;
    }

    return part;
  }
};

export default pathDivide;
