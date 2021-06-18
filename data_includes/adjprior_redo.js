var shuffleSequence = seq("test", 'consent', 'intro', 'practice1intro', 'practice1', 'practice2intro', 'practice2', 'end_practice', rshuffle(startsWith('item-')), 'questionnaire', 'exit');

// rshuffle(rshuffle(startsWith('shape_')), rshuffle(startsWith('artifact_')))

var showProgressBar = false;
var pageTitle = "Mechanical Turk Experiment";
// "The results were successfully sent to the server.
// You can now validate your participation on Mechanical Turk. Thanks!"
var completionMessage = "your results have been submitted -- thank you!";
// "There was an error sending the results to the server.
var completionErrorMessage = "something went wrong";

var defaults = [
    "Separator", {
        transfer: 350,
        normalMessage: "+",
        errorMessage: "+",
        ignoreFailure: true
    },
    "Message", {
        hideProgressBar: false,
        transfer: "keypress"
    },
    "Form", {
        hideProgressBar: true,
        continueOnReturn: true
    },
];


var items = [

    ["sep", "Separator", { }],

    ["consent", "Form", {
        consentRequired: true,
        html: {include: "consent.html"}
    }],

    ["intro", "Form", {
        html: {include: "instructions.html"},
        validators: {
            age: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018age\u2019"; }
        }
    }],

    ["questionnaire", "Form", {
        html: {include: "questionnaire.html"},
        continueMessage: "click here to obtain an MTurk validation code"
    }],

    ["exit", "Form", {
        html: {include: "exit.html"},
        continueMessage: "click here to submit your reults!"
    }],

    ["test", 
        "PictureSelect", {html: {include: "test_practice.html"}, prompt: 'test'},
        "Form", {html: {include: "property_judgment.html"}}
    ],

    ["practice1intro", "Message", {
                consentRequired: false,
                transfer: "click",
                continueMessage: "Click here to continue",
                html: "<div><p>On the next screen, you will see some images of pears. Your task is to decide which of the images is the most likely in the world. You can only choose one.</p>",
    }],

    ["practice1", "PictureSelect", {
         html: {include: "practice1.html"}, 
         prompt: 'pear'
    }],
                
    ["practice2intro", "Message", {
                consentRequired: false,
                transfer: "click",
                continueMessage: "Click here to continue",
                html: "<div><p>On the next screen, you will see some images of triangles. Your task is to decide which of the images is the most likely in the world. You can only choose one.</p>",
    }],
                
    ["practice2", "PictureSelect", {
         html: {include: "practice2.html"},
         prompt: 'triangle'
    }],
                
    ["end_practice", "Message", {
                consentRequired: false,
                transfer: "click",
                continueMessage: "Click here to begin the experiment.",
                html: "<div><p>You have finished the practice section.</p><p>You will not receive any more instructions for the rest of the study. For each sentence you will see, please <b>choose the image you think is the most likely in the world. </b></p>",
    }],
                
               
     // Green cube
    [["item-full_greencube",1], "PictureSelect", {html: {include: "item_shape_empty_full_full_greencube.html"}, prompt: "cube"}],

     // Yellow cubr
    [["item-full_yellowcube",2], "PictureSelect", {html: {include: "item_shape_empty_full_full_yellowcube.html"}, prompt: "cube"}],
     
     // Blue arrow
    [["item-bent_bluearrow", 3],"PictureSelect", {html: {include: "item_shape_straight_bent_bent_bluearrow.html"}, prompt: "arrow"}],
              
    // Green arrow     
    [["item-bent_greenarrow",4], "PictureSelect", {html: {include: "item_shape_straight_bent_bent_greenarrow.html"}, prompt: "arrow"}],
    
    // Red square
    [["item-big_redsquare", 5],"PictureSelect", {html: {include: "item_shape_small_big_big_redsquare.html"}, prompt: "square"}],
    
    // Yellow circle         
    [["item-big_yellowcircle", 6],"PictureSelect", {html: {include: "item_shape_small_big_big_yellowcircle.html"}, prompt: "circle"}],
    
    // Green oval
    [["item-wide_greenoval", 7],"PictureSelect", {html: {include: "item_shape_narrow_wide_wide_greenoval.html"}, prompt: "oval"}],

    // Red oval
    [["item-wide_redoval", 8],"PictureSelect", {html: {include: "item_shape_narrow_wide_wide_redoval.html"}, prompt: "oval"}],
               
    // Red circle
    [["item-striped_redcircle",9],"PictureSelect", {html: {include: "item_shape_plain_striped_stripedd_redcircle.html"}, prompt: "circle"}],
    
    // Yellow square
    [["item-striped_yellowsquare",10], "PictureSelect", {html: {include: "item_shape_plain_striped_stripedd_yellowsquare.html"}, prompt: "square"}],
    
    // Green cylinder         
    [["item-tall_greencyclinder", 11],"PictureSelect", {html: {include: "item_shape_short_tall_tall_greencylinder.html"}, prompt: "cyclinder"}],
    
    // Green spiral
    [["item-tall_greenspiral",12], "PictureSelect", {html: {include: "item_shape_short_tall_tall_greenspiral.html"}, prompt: "spiral"}],
                 
    // BLue circle
    [["item-open_bluecircle", 13],"PictureSelect", {html: {include: "item_shape_closed_open_open_bluecircle.html"}, prompt: "circle"}],
    
    // Red triangle
    [["item-open_redtriangle", 14],"PictureSelect", {html: {include: "item_shape_closed_open_open_redtriangle.html"}, prompt: "triangle"}],
    
    // Blue line
    [["item-curved_blueline",15], "PictureSelect", {html: {include: "item_shape_straight_curved_curved_blueline.html"}, prompt: "line"}],
    
    // Palm
    [["item-curved-greenline",16], "PictureSelect", {html: {include: "item_shape_straight_curved_curved_greenline.html"}, prompt: "line"}],
    
    // Yellow circle
    [["item-spotted_yellowcircle",17], "PictureSelect", {html: {include: "item_shape_plain_spotted_spotted_yellowcircle.html"}, prompt: "circle"}],
    
    // Yellow square    
    [["item-spotted_yellowsquare",18], "PictureSelect", {html: {include: "item_shape_plain_spotted_spotted_yellowsquare.html"}, prompt: "square"}],
    
    // Blue arrow
    [["item-thick_bluearrow", 19],"PictureSelect", {html: {include: "item_shape_thin_thick_thick_bluearrow.html"}, prompt: "arrow"}],

    // Book
    [["item-thick_redarrow",20], "PictureSelect", {html: {include: "item_shape_thin_thick_thick_redarrow.html"}, prompt: "arrow"}],

    // Noodle
    [["item-long_greenarrow", 21],"PictureSelect", {html: {include: "item_shape_short_long_long_greenarrow.html"}, prompt: "arrow"}],
   
    // Green line
    [["item-long_greenline", 22],"PictureSelect", {html: {include: "item_shape_short_long_long_greenline.html"}, prompt: "line"}],

    // Blue square     
    [["item-bumpy_bluesquare",23], "PictureSelect", {html: {include: "item_shape_smooth_bumpy_bumpy_bluesquare.html"}, prompt: "square"}],
    
                
    // Red square
    [["item-bumpy_redsquare",24], "PictureSelect", {html: {include: "item_shape_smooth_bumpy_bumpy_redsquare.html"}, prompt: "square"}],
    
    // Beer
    [["item-beer",25], "PictureSelect", {html: {include: "item_artifact_empty_full_beer.html"}, prompt: "beer"}],

     // Trash
    [["item-trash",26], "PictureSelect", {html: {include: "item_artifact_empty_full_trash.html"}, prompt: "trash"}],
     
     // Rod
    [["item-straightrod", 27],"PictureSelect", {html: {include: "item_artifact_straight_bent_straightrod.html"}, prompt: "rod"}],
              
    // Nail     
    [["item-bentnail",28], "PictureSelect", {html: {include: "item_artifact_straight_bent_bentnail.html"}, prompt: "nail"}],
    
    // Boat
    [["item-boat", 29],"PictureSelect", {html: {include: "item_artifact_small_big_boat.html"}, prompt: "boat"}],
    
    // Snowman         
    [["item-snowman", 30],"PictureSelect", {html: {include: "item_artifact_small_big_snowman.html"}, prompt: "snowman"}],
    
    // Bridge 1
    [["item-bridge", 31],"PictureSelect", {html: {include: "item_artifact_narrow_wide_bridge.html"}, prompt: "bridge"}],

    // Sofa
    [["item-sofa", 32],"PictureSelect", {html: {include: "item_artifact_narrow_wide_sofa.html"}, prompt: "sofa"}],
               
    // Fish
    [["item-fish",33],"PictureSelect", {html: {include: "item_artifact_plain_striped_bw_stripe_fish.html"}, prompt: "fish"}],
    
    // Shirt 
    [["item-shirt",34], "PictureSelect", {html: {include: "item_artifact_plain_striped_shirt.html"}, prompt: "shirt"}],
    
    // Candle         
    [["item-candle", 35],"PictureSelect", {html: {include: "item_artifact_short_tall_candle.html"}, prompt: "candle"}],
    
    // Stack of books
    [["item-stack",36], "PictureSelect", {html: {include: "item_artifact_short_tall_stack.html"}, prompt: "stack of books"}],
                 
    // Chips
    [["item-chips", 37],"PictureSelect", {html: {include: "item_artifact_closed_open_chips.html"}, prompt: "bag of chips"}],
    
    // Garage
    [["item-garage", 38],"PictureSelect", {html: {include: "item_artifact_closed_open_garagedoor.html"}, prompt: "garage door"}],
    
    // Bridge 2
    [["item-curvedbridge",39], "PictureSelect", {html: {include: "item_artifact_straight_curved_curvedbridge.html"}, prompt: "bridge"}],
    
    // Palm
    [["item-palm",40], "PictureSelect", {html: {include: "item_artifact_straight_curved_palm.html"}, prompt: "palm tree"}],
    
    // Ladybug
    [["item-ladybug",41], "PictureSelect", {html: {include: "item_artifact_plain_spotted_ladybug.html"}, prompt: "ladybug"}],
    
    // Pillow    
    [["item-pillow",42], "PictureSelect", {html: {include: "item_artifact_plain_spotted_pillow.html"}, prompt: "pillow"}],
    
    // Marker
    [["item-marker", 43],"PictureSelect", {html: {include: "item_artifact_thin_thick_marker.html"}, prompt: "marker"}],

    // Book
    [["item-book",44], "PictureSelect", {html: {include: "item_artifact_thin_thick_book.html"}, prompt: "book"}],

    // Noodle
    [["item-noodle", 45],"PictureSelect", {html: {include: "item_artifact_short_long_noodle.html"}, prompt: "noodle"}],
   
    // Table
    [["item-table", 46],"PictureSelect", {html: {include: "item_artifact_short_long_table.html"}, prompt: "table"}],

    // Shoe     
    [["item-shoe",47], "PictureSelect", {html: {include: "item_artifact_smooth_bumpy_shoe.html"}, prompt: "shoe"}],
    
                
    // Squash
    [["item-squash",48], "PictureSelect", {html: {include: "item_artifact_smooth_bumpy_squash.html"}, prompt: "squash"}]
    

 ];






