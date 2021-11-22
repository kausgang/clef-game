// play audio when clicked
function onClickAudio() {
  $(".piano").on("click", (e) => {
    console.log(e.target.id); //HAS THE NOTE

    keys = document.querySelector(".active");
    if (keys != null) keys.classList.remove("active");

    const audio = e.target.children[0];
    audio.currentTime = 0;
    audio.play();

    e.target.classList.add("active");

    // when the audio ends, remove the active key css
    audio.addEventListener("ended", () => {
      e.target.classList.remove("active");
    });
  });
}

function createEmptyStave() {
  //   create empty stave
  VF = Vex.Flow;

  // Create an SVG renderer and attach it to the DIV element named "boo".
  var div = document.getElementById("clef");
  var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

  // Configure the rendering context.
  width = $(document).width();
  //   renderer.resize(500, 200);
  renderer.resize(width, 200);
  var context = renderer.getContext();
  context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

  // Create a stave of width 400 at position 10, 20 on the canvas.

  //   var stave_treble = new VF.Stave(10, 20, 400);
  var stave_treble = new VF.Stave(width * 0.3, 20, 400);
  //   var stave_bass = new VF.Stave(10, 90, 400);
  var stave_bass = new VF.Stave(width * 0.3, 90, 400);

  // Add a clef and time signature.
  stave_treble.addClef("treble").addTimeSignature("4/4");
  stave_bass.addClef("bass").addTimeSignature("4/4");

  // Connect it to the rendering context and draw!
  stave_treble.setContext(context).draw();
  stave_bass.setContext(context).draw();

  return VF;
}

// create custom stave
function createCustomStave(keySignature) {
  //   create empty stave
  VF = Vex.Flow;

  // Create an SVG renderer and attach it to the DIV element named "boo".
  var div = document.getElementById("clef");
  var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

  width = $(document).width();
  //   renderer.resize(500, 200);
  renderer.resize(width, 200);
  var context = renderer.getContext();
  context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

  // Create a stave of width 400 at position 10, 20 on the canvas.
  var stave_treble = new VF.Stave(width * 0.3, 20, 400);
  var stave_bass = new VF.Stave(width * 0.3, 90, 400);

  // Add a clef and time signature.
  stave_treble.setTimeSignature("4/4");
  stave_bass.setTimeSignature("4/4");

  // Add a clef and key signature.
  stave_treble.addClef("treble").addKeySignature(keySignature);
  stave_bass.addClef("bass").addKeySignature(keySignature);

  // Connect it to the rendering context and draw!
  stave_treble.setContext(context).draw();
  stave_bass.setContext(context).draw();

  return VF;
}

function _drawNote(keySignature) {
  const VF = createCustomStave(keySignature);

  var notes = [
    // A quarter-note C.
    new VF.StaveNote({ clef: "treble", keys: ["c/4"], duration: "q" }),

    // A quarter-note D.
    new VF.StaveNote({ clef: "treble", keys: ["d/4"], duration: "q" }),

    // A quarter-note rest. Note that the key (b/4) specifies the vertical
    // position of the rest.
    new VF.StaveNote({ clef: "treble", keys: ["b/4"], duration: "qr" }),

    // A C-Major chord.
    new VF.StaveNote({
      clef: "treble",
      keys: ["c/4", "e/4", "g/4"],
      duration: "q",
    }),
  ];

  // Create a voice in 4/4 and add the notes from above
  var voice = new VF.Voice({ num_beats: 4, beat_value: 4 });
  voice.addTickables(notes);

  // Format and justify the notes to 400 pixels.
  var formatter = new VF.Formatter().joinVoices([voice]).format([voice], 400);

  // Render voice
  voice.draw(context, stave_);
}
