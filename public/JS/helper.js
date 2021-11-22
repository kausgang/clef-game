function createEmptyStave(VF, context, renderer) {
  // Configure the rendering context.
  width = $(document).width();
  renderer.resize(width, 200);

  // Create a stave of width 400 at position 10, 20 on the canvas.

  //   var stave_treble = new VF.Stave(10, 20, 400);
  var stave_treble = new VF.Stave(width * 0.35, 20, 400);
  //   var stave_bass = new VF.Stave(10, 90, 400);
  var stave_bass = new VF.Stave(width * 0.35, 90, 400);

  // Add a clef and time signature.
  stave_treble.addClef("treble").addTimeSignature("4/4");
  stave_bass.addClef("bass").addTimeSignature("4/4");

  // Connect it to the rendering context and draw!
  stave_treble.setContext(context).draw();
  stave_bass.setContext(context).draw();

  //   return VF;
}

// create custom stave
function createCustomStave(VF, context, renderer, keySignature) {
  // Configure the rendering context.
  width = $(document).width();
  renderer.resize(width, 200);

  // Create a stave of width 400 at position 10, 20 on the canvas.
  var stave_treble = new VF.Stave(width * 0.35, 20, 400);
  var stave_bass = new VF.Stave(width * 0.35, 90, 400);

  // Add a clef and time signature.
  stave_treble.setTimeSignature("4/4");
  stave_bass.setTimeSignature("4/4");

  // Add a clef and key signature.
  stave_treble.addClef("treble").addKeySignature(keySignature);
  stave_bass.addClef("bass").addKeySignature(keySignature);

  // Connect it to the rendering context and draw!
  stave_treble.setContext(context).draw();
  stave_bass.setContext(context).draw();

  //   return VF;
}

function _drawNote(VF, context, renderer, keySignature, clef, note, octave) {
  // Configure the rendering context.
  width = $(document).width();
  renderer.resize(width, 200);

  // Create a stave of width 400 at position 10, 20 on the canvas.
  var stave = new VF.Stave(width * 0.35, 20, 400);

  // Add a clef and time signature.
  stave.setTimeSignature("4/4");

  // Add a clef and key signature.
  stave.addClef(clef).addKeySignature(keySignature);
  //    stave_bass.addClef("bass").addKeySignature(keySignature);

  // Connect it to the rendering context and draw!
  stave.setContext(context).draw();
  //    stave_bass.setContext(context).draw();

  // Make sure the staves have a litle room before starting point for notes
  var startX = stave.getNoteStartX() + 100;
  stave.setNoteStartX(startX);

  var key = note + "/" + octave;
  var notes = [new VF.StaveNote({ clef: clef, keys: [key], duration: "w" })];

  // Create a voice in 4/4 and add the notes from above
  var voice = new VF.Voice({ num_beats: 4, beat_value: 4 });
  voice.addTickables(notes);

  // Format and justify the notes to 400 pixels.
  var formatter = new VF.Formatter().joinVoices([voice]).format([voice], 400);

  // Render voice
  voice.draw(context, stave);
}

function randomize_question() {
  const clef = ["treble", "bass"];
  const notes = [
    "A",
    "Bb",
    "B",
    "C",
    "Db",
    "D",
    "Eb",
    "E",
    "F",
    "Gb",
    "G",
    "Ab",
  ];
  const octave = [2, 3, 4, 5, 6];

  //
  random_note = notes[Math.floor(Math.random() * notes.length)];
  random_octave = octave[Math.floor(Math.random() * octave.length)];
  if (random_octave > 4) random_clef = "treble";
  else if (random_octave == 4) {
    random_clef = clef[Math.floor(Math.random() * clef.length)];
  } else random_clef = "bass";

  var return_object = {
    clef: random_clef,
    note: random_note,
    octave: random_octave,
  };
  return return_object;
}
