jQuery(() => {
  //play audio when key clicked
  onClickAudio();

  //   draw empty stave
  const VF = createEmptyStave();

  $("#change_note").on("click", hidestave);

  $("#key_signature").on("change", (element) => {
    console.log($(element).val());
  });
});

const hidestave = () => {
  console.log($("#clef").children().hide());
  createCustomStave("D");
};
