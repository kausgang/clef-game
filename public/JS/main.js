jQuery(() => {
  VF = Vex.Flow;
  // Create an SVG renderer and attach it to the DIV element named "clef".
  var div = document.getElementById("clef");
  var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

  // Configure the rendering context.
  var context = renderer.getContext();
  context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

  // draw empty C stave when the page loads
  createEmptyStave(VF, context, renderer);

  //   change key signature when selection updates
  $("select").on("change", () => {
    const keySignature = $("select").val();
    changeStave(VF, context, renderer, keySignature);
  });

  //   on start button click
  $("#start").on("click", () => {
    // hide start button
    $("#start").hide();

    // show stop button
    $("#stop").removeClass("d-none");
    $("#stop").show();

    // disable select item
    $("#key_signature").attr("disabled", true);

    const keySignature = $("select").val();
    startGame(VF, context, renderer, keySignature);
  });

  $("#stop").on("click", () => {
    // hide stop button
    $("#stop").hide();
    // show start button
    $("#start").show();

    // disable piano click
    $(".piano").off("click");

    // change key selection value to C
    $("select").val("C");

    // enable select item
    $("#key_signature").attr("disabled", false);
    // show empty clefs
    $("#clef").children().empty();
    createEmptyStave(VF, context, renderer);
  });
});

function startGame(VF, context, renderer, keySignature) {
  //draw random note
  const { note, octave } = drawNote(VF, context, renderer, keySignature);
  // enable audio
  question = note + "" + octave;
  console.log(question);
  onClickAudio(VF, context, renderer, keySignature, question);
}

// play audio when clicked
function onClickAudio(VF, context, renderer, keySignature, question) {
  $(".piano").on("click", (e) => {
    // console.log(e.target.id); //HAS THE NOTE

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

    // verify answer
    answer = e.target.id;
    if (question === answer) {
      console.log("success");
      //   if correct answer - rerender

      //   show success to user
      $("#clef_holder").css("background-color", "#cef2ea");
      setTimeout(function () {
        $("#clef_holder").css("background-color", "");
      }, 500);

      //   refresh question
      startGame(VF, context, renderer, keySignature);
    }
  });
}

function drawNote(VF, context, renderer, keySignature) {
  // empty the stave
  $("#clef").children().empty();
  //randomize clef, note and octave
  const { clef, note, octave } = randomize_question();
  //   console.log(clef, note, octave);

  //   call drawnote
  _drawNote(VF, context, renderer, keySignature, clef, note, octave);

  var return_object = {
    note: random_note,
    octave: random_octave,
  };

  return return_object;
}

function changeStave(VF, context, renderer, keySignature) {
  // get the value from select element
  //   const key = this.value;
  //   hide the empty C stave
  $("#clef").children().empty();
  //   create stave for the given key signature
  createCustomStave(VF, context, renderer, keySignature);
}
