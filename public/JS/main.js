question = [];
VF = Vex.Flow;
var div = document.getElementById("clef");
var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

// // Configure the rendering context.
var context = renderer.getContext();
context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

jQuery(() => {
  // draw empty C stave when the page loads
  createEmptyStave(VF, context, renderer);

  //   change key signature when selection updates
  $("select").on("change", () => {
    const keySignature = $("select").val();
    // changeStave(VF, context, renderer, keySignature);
    changeStave(keySignature);
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
    // startGame(VF, context, renderer, keySignature);
    startGame(VF, context, renderer, keySignature);
    // const keySignature = $("select").val();
    onClickAudio(
      VF,
      context,
      renderer,
      keySignature,
      question[question.length - 1]
    );
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
  question.push(note + "" + octave);
}

// play audio when clicked
function onClickAudio(VF, context, renderer, keySignature, current_question) {
  $(".piano").on("click", (e) => {
    // console.log(e.target.id); //HAS THE NOTE

    console.log("HINT - ", question[question.length - 1]);
    current_question = question[question.length - 1];

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
    if (current_question === answer) {
      question = [];

      //   if correct answer - rerender

      //   show success to user
      $("#clef_holder").css("background-color", "#cef2ea");
      setTimeout(function () {
        $("#clef_holder").css("background-color", "");
      }, 500);

      //   refresh question
      const { note, octave } = drawNote(VF, context, renderer, keySignature);
      question.push(note + "" + octave);
    } else {
      //   show success to user
      $("#clef_holder").css("background-color", " #e78191");
      setTimeout(function () {
        $("#clef_holder").css("background-color", "");
      }, 500);
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

function changeStave(keySignature) {
  // get the value from select element
  //   hide the empty C stave
  $("#clef").children().empty();
  //   create stave for the given key signature
  createCustomStave(VF, context, renderer, keySignature);
}
