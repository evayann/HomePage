import { trigger, animate, transition, style, query, state, AnimationTriggerMetadata } from "@angular/animations";
  
export const routerFadeAnimation: AnimationTriggerMetadata = trigger("routerFadeAnimation", [
  // The "* => *" will trigger the animation to change between any two states
  transition("* => *", [
    // The query function has three params.
    // First is the event, so this will apply on entering or when the element is added to the DOM.
    // Second is a list of styles or animations to apply.
    // Third we add a config object with optional set to true, this is to signal
    // angular that the animation may not apply as it may or may not be in the DOM.
    query(
      ":enter", 
      [style({ opacity : 0 })], 
      { optional: true }
    ),
    query(
      ":leave",
      [style({ opacity: 1 }), animate(".5s", style({ opacity: 0 }))],
      { optional: true }
    ),
    query(
      ":enter",
      [style({ opacity: 0, position: "absolute" }), animate(".5s", style({ opacity: 1 }))],
      { optional: true }
    )
  ])
]);

export const fadeAnimation: AnimationTriggerMetadata = trigger("fadeAnimation", [
  state(
    "hidden", 
    style({ opacity: 0 })
  ),
  state(
    "visible", 
    style({ opacity: 1 })
  ),
  transition("hidden <=> visible", [
    animate(".25s ease")
  ])
]);