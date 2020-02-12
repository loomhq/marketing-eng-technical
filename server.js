const Bundler = require("parcel-bundler");
const express = require("express");
const PORT = process.env.PORT || 3000;
const bundler = new Bundler("./src/index.html", {
  cache: false
});

const PAGES = [
  {
    title: "Cross Section",
    slug: "cross-section",
    id: "cs",
    cover: "/static/img/cross-section.png",
    thumb: "/static/img/cross-section@big.png",
    quote: `"Perspective projection" redirects here. For a more mathematical treatment, see Perspective transform.`,
    description:
      "Perspective (from Latin: perspicere 'to see through') Linear or Point projection perspective is one of two types of Graphical projection perspective in the graphic arts (The other type is Parallel projection). Linear perspective is an approximate representation, generally on a flat surface (such as paper), of an image as it is seen by the eye. The most characteristic features of Linear perspective are that objects appear smaller as their distance from the observer increases; and that they are subject to foreshortening, meaning that an object's dimensions along the line of sight appear shorter than its dimensions across the line of sight. Also all objects will recede to points in the distance, usually along the horizon line, but also above and below the horizon line depending on view used.",
    sections: [
      {
        title: "Overview",
        content: `Perspective works by representing the light that passes from a scene through an imaginary rectangle (realized as the plane of the painting), to the viewer's eye, as if a viewer were looking through a window and painting what is seen directly onto the windowpane. If viewed from the same spot as the windowpane was painted, the painted image would be identical to what was seen through the unpainted window. Each painted object in the scene is thus a flat, scaled down version of the object on the other side of the window.[4] Because each portion of the painted object lies on the straight line from the viewer's eye to the equivalent portion of the real object it represents, the viewer sees no difference (sans depth perception) between the painted scene on the windowpane and the view of the real scene. All perspective drawings assume the viewer is a certain distance away from the drawing. Objects are scaled relative to that viewer. An object is often not scaled evenly: a circle often appears as an ellipse and a square can appear as a trapezoid. This distortion is referred to as foreshortening.`
      },
      {
        title: "Aerial perspective",
        content: `Aerial (or atmospheric) perspective depends on distant objects being more obscured by atmospheric elements, so more distant objects are less visible to the viewer. In general, distant objects become lighter in daytime and darker at night as they recede.[5] Aerial perspective can be combined with, but does not depend on, one or more vanishing points.`
      },
      {
        title: "One-point perspective",
        content: `A drawing has one-point perspective when it contains only one vanishing point on the horizon line. This type of perspective is typically used for images of roads, railway tracks, hallways, or buildings viewed so that the front is directly facing the viewer. Any objects that are made up of lines either directly parallel with the viewer's line of sight or directly perpendicular (the railroad slats) can be represented with one-point perspective. These parallel lines converge at the vanishing point.`
      }
    ]
  },
  {
    title: "Cutaway drawing",
    slug: "cutaway-drawing",
    id: "cd",
    cover: "/static/img/cutaway-drawing.png",
    thumb: "/static/img/cutaway-drawing@big.png",
    quote: `"Perspective projection" redirects here. For a more mathematical treatment, see Perspective transform.`,
    description:
      "Perspective (from Latin: perspicere 'to see through') Linear or Point projection perspective is one of two types of Graphical projection perspective in the graphic arts (The other type is Parallel projection). Linear perspective is an approximate representation, generally on a flat surface (such as paper), of an image as it is seen by the eye. The most characteristic features of Linear perspective are that objects appear smaller as their distance from the observer increases; and that they are subject to foreshortening, meaning that an object's dimensions along the line of sight appear shorter than its dimensions across the line of sight. Also all objects will recede to points in the distance, usually along the horizon line, but also above and below the horizon line depending on view used.",
    sections: [
      {
        title: "Overview",
        content: `Perspective works by representing the light that passes from a scene through an imaginary rectangle (realized as the plane of the painting), to the viewer's eye, as if a viewer were looking through a window and painting what is seen directly onto the windowpane. If viewed from the same spot as the windowpane was painted, the painted image would be identical to what was seen through the unpainted window. Each painted object in the scene is thus a flat, scaled down version of the object on the other side of the window.[4] Because each portion of the painted object lies on the straight line from the viewer's eye to the equivalent portion of the real object it represents, the viewer sees no difference (sans depth perception) between the painted scene on the windowpane and the view of the real scene. All perspective drawings assume the viewer is a certain distance away from the drawing. Objects are scaled relative to that viewer. An object is often not scaled evenly: a circle often appears as an ellipse and a square can appear as a trapezoid. This distortion is referred to as foreshortening.`
      },
      {
        title: "Aerial perspective",
        content: `Aerial (or atmospheric) perspective depends on distant objects being more obscured by atmospheric elements, so more distant objects are less visible to the viewer. In general, distant objects become lighter in daytime and darker at night as they recede.[5] Aerial perspective can be combined with, but does not depend on, one or more vanishing points.`
      },
      {
        title: "One-point perspective",
        content: `A drawing has one-point perspective when it contains only one vanishing point on the horizon line. This type of perspective is typically used for images of roads, railway tracks, hallways, or buildings viewed so that the front is directly facing the viewer. Any objects that are made up of lines either directly parallel with the viewer's line of sight or directly perpendicular (the railroad slats) can be represented with one-point perspective. These parallel lines converge at the vanishing point.`
      }
    ]
  },
  {
    title: "Reciprocating motion",
    slug: "reciprocating-motion",
    id: "rm",
    cover: "/static/img/reciprocating-motion.png",
    thumb: "/static/img/reciprocating-motion@big.png",
    quote: `"Perspective projection" redirects here. For a more mathematical treatment, see Perspective transform.`,
    description:
      "Perspective (from Latin: perspicere 'to see through') Linear or Point projection perspective is one of two types of Graphical projection perspective in the graphic arts (The other type is Parallel projection). Linear perspective is an approximate representation, generally on a flat surface (such as paper), of an image as it is seen by the eye. The most characteristic features of Linear perspective are that objects appear smaller as their distance from the observer increases; and that they are subject to foreshortening, meaning that an object's dimensions along the line of sight appear shorter than its dimensions across the line of sight. Also all objects will recede to points in the distance, usually along the horizon line, but also above and below the horizon line depending on view used.",
    sections: [
      {
        title: "Overview",
        content: `Perspective works by representing the light that passes from a scene through an imaginary rectangle (realized as the plane of the painting), to the viewer's eye, as if a viewer were looking through a window and painting what is seen directly onto the windowpane. If viewed from the same spot as the windowpane was painted, the painted image would be identical to what was seen through the unpainted window. Each painted object in the scene is thus a flat, scaled down version of the object on the other side of the window.[4] Because each portion of the painted object lies on the straight line from the viewer's eye to the equivalent portion of the real object it represents, the viewer sees no difference (sans depth perception) between the painted scene on the windowpane and the view of the real scene. All perspective drawings assume the viewer is a certain distance away from the drawing. Objects are scaled relative to that viewer. An object is often not scaled evenly: a circle often appears as an ellipse and a square can appear as a trapezoid. This distortion is referred to as foreshortening.`
      },
      {
        title: "Aerial perspective",
        content: `Aerial (or atmospheric) perspective depends on distant objects being more obscured by atmospheric elements, so more distant objects are less visible to the viewer. In general, distant objects become lighter in daytime and darker at night as they recede.[5] Aerial perspective can be combined with, but does not depend on, one or more vanishing points.`
      },
      {
        title: "One-point perspective",
        content: `A drawing has one-point perspective when it contains only one vanishing point on the horizon line. This type of perspective is typically used for images of roads, railway tracks, hallways, or buildings viewed so that the front is directly facing the viewer. Any objects that are made up of lines either directly parallel with the viewer's line of sight or directly perpendicular (the railroad slats) can be represented with one-point perspective. These parallel lines converge at the vanishing point.`
      }
    ]
  },
  {
    title: "Perspective",
    slug: "perspective",
    id: "pp",
    cover: "/static/img/perspective.png",
    thumb: "/static/img/perspective@big.png",
    quote: `"Perspective projection" redirects here. For a more mathematical treatment, see Perspective transform.`,
    description:
      "Perspective (from Latin: perspicere 'to see through') Linear or Point projection perspective is one of two types of Graphical projection perspective in the graphic arts (The other type is Parallel projection). Linear perspective is an approximate representation, generally on a flat surface (such as paper), of an image as it is seen by the eye. The most characteristic features of Linear perspective are that objects appear smaller as their distance from the observer increases; and that they are subject to foreshortening, meaning that an object's dimensions along the line of sight appear shorter than its dimensions across the line of sight. Also all objects will recede to points in the distance, usually along the horizon line, but also above and below the horizon line depending on view used.",
    sections: [
      {
        title: "Overview",
        content: `Perspective works by representing the light that passes from a scene through an imaginary rectangle (realized as the plane of the painting), to the viewer's eye, as if a viewer were looking through a window and painting what is seen directly onto the windowpane. If viewed from the same spot as the windowpane was painted, the painted image would be identical to what was seen through the unpainted window. Each painted object in the scene is thus a flat, scaled down version of the object on the other side of the window.[4] Because each portion of the painted object lies on the straight line from the viewer's eye to the equivalent portion of the real object it represents, the viewer sees no difference (sans depth perception) between the painted scene on the windowpane and the view of the real scene. All perspective drawings assume the viewer is a certain distance away from the drawing. Objects are scaled relative to that viewer. An object is often not scaled evenly: a circle often appears as an ellipse and a square can appear as a trapezoid. This distortion is referred to as foreshortening.`
      },
      {
        title: "Aerial perspective",
        content: `Aerial (or atmospheric) perspective depends on distant objects being more obscured by atmospheric elements, so more distant objects are less visible to the viewer. In general, distant objects become lighter in daytime and darker at night as they recede.[5] Aerial perspective can be combined with, but does not depend on, one or more vanishing points.`
      },
      {
        title: "One-point perspective",
        content: `A drawing has one-point perspective when it contains only one vanishing point on the horizon line. This type of perspective is typically used for images of roads, railway tracks, hallways, or buildings viewed so that the front is directly facing the viewer. Any objects that are made up of lines either directly parallel with the viewer's line of sight or directly perpendicular (the railroad slats) can be represented with one-point perspective. These parallel lines converge at the vanishing point.`
      }
    ]
  }
];

const LANDING = {
  title: "The Exploded View",
  description:
    "An exploded view drawing is a diagram, picture, schematic or technical drawing of an object, that shows the relationship or order of assembly of various parts.",
  content:
    "It shows the components of an object slightly separated by distance, or suspended in surrounding space in the case of a three-dimensional exploded diagram. An object is represented as if there had been a small controlled explosion emanating from the middle of the object, causing the object's parts to be separated an equal distance away from their original locations.",
  pages: [...PAGES]
};

const app = express();

// API endpoints here
app.get("/api/landing", (req, res) => {
  res.json({ ...LANDING });
});

app.use("/static", express.static("public"));
app.use(bundler.middleware());
app.listen(PORT);
