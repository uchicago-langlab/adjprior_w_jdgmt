var shuffleSequence = seq('consent', 'intro', 'practice1intro', 'practice1', 'practice2intro', 'practice2', 'end_practice', rshuffle(startsWith('item-')), 'questionnaire', 'exit');

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
        continueMessage: "click here to submit your results!"
    }],


    ["practice1intro", "Message", {
            consentRequired: false,
            transfer: "click",
            continueMessage: "Click here to continue",
            html: "<div><p>This is the first practice trial.</p>\
            <p>On the next screen, you will see some images of pears. Your task is to decide which of the images is the most likely in the world. You can only choose one.</p>",
    }],

    ["practice1",
        "PictureSelect", {
            html: {include: "practice1.html"}, 
            prompt: 'pear'},
        "Message", {
            consentRequired: false,
            transfer: "click",
            continueMessage: "Click here to continue",
            html: "<div><p>Then, on the next screen, you will be asked to explain how you made the judgment about the object you just seen.</p>\
            <p>For example, for the five pears you've just seen on the previous page, the criterion may be that the pear you chose has the most common size/shape among others.</p>",
        },
        "Form", {html: {include: "property_judgment.html"}}
    ],
                
    ["practice2intro", "Message", {
            consentRequired: false,
            transfer: "click",
            continueMessage: "Click here to continue",
            html: "<div><p>This is the second practice trial.</p>\
            <p>On the next screen, you will see some images of triangles. Your task is to decide which of the images is the most likely in the world. You can only choose one.</p>",
    }],
                
    ["practice2", 
        "PictureSelect", {
            html: {include: "practice2.html"},
            prompt: 'triangle'},
        "Message", {
            consentRequired: false,
            transfer: "click",
            continueMessage: "Click here to continue",
            html: "<div><p>Then, on the next screen, you will be asked to explain how you made the judgment about the object you just seen.</p>\
            <p>For example, for the five triangles you've just seen on the previous page, the criterion may be that the triangle you chose has the most common size/shape among others.</p>",
        },
        "Form", {html: {include: "property_judgment.html"}}
    ],
                
    ["end_practice", "Message", {
            consentRequired: false,
            transfer: "click",
            continueMessage: "Click here to begin the experiment.",
            html: "<div><p>You have finished the practice section.</p><p>You will not receive any more instructions for the rest of the study. For each sentence you will see, please <b>choose the image you think is the most likely in the world. </b></p>",
    }],
                
               
     // Green cube
    [["item-full_greencube",1], 
        "PictureSelect", {html: {include: "item_shape_empty_full_full_greencube.html"}, prompt: "cube"},
        "Form", {html: {include: "property_judgment.html"}}],

     // Yellow cubr
    [["item-full_yellowcube",2], 
        "PictureSelect", {html: {include: "item_shape_empty_full_full_yellowcube.html"}, prompt: "cube"},
        "Form", {html: {include: "property_judgment.html"}}],
     
     // Blue arrow
    [["item-bent_bluearrow", 3],
        "PictureSelect", {html: {include: "item_shape_straight_bent_bent_bluearrow.html"}, prompt: "arrow"},
        "Form", {html: {include: "property_judgment.html"}}],
              
    // Green arrow     
    [["item-bent_greenarrow",4], 
        "PictureSelect", {html: {include: "item_shape_straight_bent_bent_greenarrow.html"}, prompt: "arrow"},
        "Form", {html: {include: "property_judgment.html"}}],
    
    // Red square
    [["item-big_redsquare", 5],
        "PictureSelect", {html: {include: "item_shape_small_big_big_redsquare.html"}, prompt: "square"},
        "Form", {html: {include: "property_judgment.html"}}],
    
    // Yellow circle         
    [["item-big_yellowcircle", 6],
        "PictureSelect", {html: {include: "item_shape_small_big_big_yellowcircle.html"}, prompt: "circle"},
        "Form", {html: {include: "property_judgment.html"}}],
    
    // Green oval
    [["item-wide_greenoval", 7],
        "PictureSelect", {html: {include: "item_shape_narrow_wide_wide_greenoval.html"}, prompt: "oval"},
        "Form", {html: {include: "property_judgment.html"}}],

    // Red oval
    [["item-wide_redoval", 8],
        "PictureSelect", {html: {include: "item_shape_narrow_wide_wide_redoval.html"}, prompt: "oval"},
        "Form", {html: {include: "property_judgment.html"}}],
               
    // Red circle
    [["item-striped_redcircle",9],
        "PictureSelect", {html: {include: "item_shape_plain_striped_stripedd_redcircle.html"}, prompt: "circle"},
        "Form", {html: {include: "property_judgment.html"}}],
    
    // Yellow square
    [["item-striped_yellowsquare",10], 
        "PictureSelect", {html: {include: "item_shape_plain_striped_stripedd_yellowsquare.html"}, prompt: "square"},
        "Form", {html: {include: "property_judgment.html"}}],
    
    // Green cylinder         
    [["item-tall_greencyclinder", 11],
        "PictureSelect", {html: {include: "item_shape_short_tall_tall_greencylinder.html"}, prompt: "cyclinder"},
        "Form", {html: {include: "property_judgment.html"}}],
    
    // Green spiral
    [["item-tall_greenspiral",12], 
        "PictureSelect", {html: {include: "item_shape_short_tall_tall_greenspiral.html"}, prompt: "spiral"},
        "Form", {html: {include: "property_judgment.html"}}],
                 
    // BLue circle
    [["item-open_bluecircle", 13],
        "PictureSelect", {html: {include: "item_shape_closed_open_open_bluecircle.html"}, prompt: "circle"},
        "Form", {html: {include: "property_judgment.html"}}],
    
    // Red triangle
    [["item-open_redtriangle", 14],
        "PictureSelect", {html: {include: "item_shape_closed_open_open_redtriangle.html"}, prompt: "triangle"},
        "Form", {html: {include: "property_judgment.html"}}],
    
    // Blue line
    [["item-curved_blueline",15], 
        "PictureSelect", {html: {include: "item_shape_straight_curved_curved_blueline.html"}, prompt: "line"},
        "Form", {html: {include: "property_judgment.html"}}],
    
    // Palm
    [["item-curved-greenline",16], 
        "PictureSelect", {html: {include: "item_shape_straight_curved_curved_greenline.html"}, prompt: "line"},
        "Form", {html: {include: "property_judgment.html"}}],
    
    // Yellow circle
    [["item-spotted_yellowcircle",17], 
        "PictureSelect", {html: {include: "item_shape_plain_spotted_spotted_yellowcircle.html"}, prompt: "circle"},
        "Form", {html: {include: "property_judgment.html"}}],
    
    // Yellow square    
    [["item-spotted_yellowsquare",18], 
        "PictureSelect", {html: {include: "item_shape_plain_spotted_spotted_yellowsquare.html"}, prompt: "square"},
        "Form", {html: {include: "property_judgment.html"}}],
    
    // Blue arrow
    [["item-thick_bluearrow", 19],
        "PictureSelect", {html: {include: "item_shape_thin_thick_thick_bluearrow.html"}, prompt: "arrow"},
        "Form", {html: {include: "property_judgment.html"}}],

    // Book
    [["item-thick_redarrow",20], 
        "PictureSelect", {html: {include: "item_shape_thin_thick_thick_redarrow.html"}, prompt: "arrow"},
        "Form", {html: {include: "property_judgment.html"}}],

    // Noodle
    [["item-long_greenarrow", 21],
        "PictureSelect", {html: {include: "item_shape_short_long_long_greenarrow.html"}, prompt: "arrow"},
        "Form", {html: {include: "property_judgment.html"}}],
   
    // Green line
    [["item-long_greenline", 22],
        "PictureSelect", {html: {include: "item_shape_short_long_long_greenline.html"}, prompt: "line"},
        "Form", {html: {include: "property_judgment.html"}}],

    // Blue square     
    [["item-bumpy_bluesquare",23], 
        "PictureSelect", {html: {include: "item_shape_smooth_bumpy_bumpy_bluesquare.html"}, prompt: "square"},
        "Form", {html: {include: "property_judgment.html"}}],
    
    // Red square
    [["item-bumpy_redsquare",24], 
        "PictureSelect", {html: {include: "item_shape_smooth_bumpy_bumpy_redsquare.html"}, prompt: "square"},
        "Form", {html: {include: "property_judgment.html"}}],
    
    // Beer
    [["item-beer",25], 
        "PictureSelect", {html: {include: "item_artifact_empty_full_beer.html"}, prompt: "beer"},
        "Form", {html: {include: "property_judgment.html"}}],

     // Trash
    [["item-trash",26], 
        "PictureSelect", {html: {include: "item_artifact_empty_full_trash.html"}, prompt: "trash"},
        "Form", {html: {include: "property_judgment.html"}}],
     
     // Rod
    [["item-straightrod", 27],
        "PictureSelect", {html: {include: "item_artifact_straight_bent_straightrod.html"}, prompt: "rod"},
        "Form", {html: {include: "property_judgment.html"}}],
              
    // Nail     
    [["item-bentnail",28], 
        "PictureSelect", {html: {include: "item_artifact_straight_bent_bentnail.html"}, prompt: "nail"},
        "Form", {html: {include: "property_judgment.html"}}],
    
    // Boat
    [["item-boat", 29],
        "PictureSelect", {html: {include: "item_artifact_small_big_boat.html"}, prompt: "boat"},
        "Form", {html: {include: "property_judgment.html"}}],
    
    // Snowman         
    [["item-snowman", 30],
        "PictureSelect", {html: {include: "item_artifact_small_big_snowman.html"}, prompt: "snowman"},
        "Form", {html: {include: "property_judgment.html"}}],
    
    // Bridge 1
    [["item-bridge", 31],
        "PictureSelect", {html: {include: "item_artifact_narrow_wide_bridge.html"}, prompt: "bridge"},
        "Form", {html: {include: "property_judgment.html"}}],

    // Sofa
    [["item-sofa", 32],
        "PictureSelect", {html: {include: "item_artifact_narrow_wide_sofa.html"}, prompt: "sofa"},
        "Form", {html: {include: "property_judgment.html"}}],
               
    // Fish
    [["item-fish",33],
        "PictureSelect", {html: {include: "item_artifact_plain_striped_bw_stripe_fish.html"}, prompt: "fish"},
        "Form", {html: {include: "property_judgment.html"}}],
    
    // Shirt 
    [["item-shirt",34], 
        "PictureSelect", {html: {include: "item_artifact_plain_striped_shirt.html"}, prompt: "shirt"},
        "Form", {html: {include: "property_judgment.html"}}],
    
    // Candle         
    [["item-candle", 35],
        "PictureSelect", {html: {include: "item_artifact_short_tall_candle.html"}, prompt: "candle"},
        "Form", {html: {include: "property_judgment.html"}}],
    
    // Stack of books
    [["item-stack",36], 
        "PictureSelect", {html: {include: "item_artifact_short_tall_stack.html"}, prompt: "stack of books"},
        "Form", {html: {include: "property_judgment.html"}}],
                 
    // Chips
    [["item-chips", 37],
        "PictureSelect", {html: {include: "item_artifact_closed_open_chips.html"}, prompt: "bag of chips"},
        "Form", {html: {include: "property_judgment.html"}}],
    
    // Garage
    [["item-garage", 38],
        "PictureSelect", {html: {include: "item_artifact_closed_open_garagedoor.html"}, prompt: "garage door"},
        "Form", {html: {include: "property_judgment.html"}}],
    
    // Bridge 2
    [["item-curvedbridge",39], 
        "PictureSelect", {html: {include: "item_artifact_straight_curved_curvedbridge.html"}, prompt: "bridge"},
        "Form", {html: {include: "property_judgment.html"}}],
    
    // Palm
    [["item-palm",40], 
        "PictureSelect", {html: {include: "item_artifact_straight_curved_palm.html"}, prompt: "palm tree"},
        "Form", {html: {include: "property_judgment.html"}}],
    
    // Ladybug
    [["item-ladybug",41], 
        "PictureSelect", {html: {include: "item_artifact_plain_spotted_ladybug.html"}, prompt: "ladybug"},
        "Form", {html: {include: "property_judgment.html"}}],
    
    // Pillow    
    [["item-pillow",42], 
        "PictureSelect", {html: {include: "item_artifact_plain_spotted_pillow.html"}, prompt: "pillow"},
        "Form", {html: {include: "property_judgment.html"}}],
    
    // Marker
    [["item-marker", 43],
        "PictureSelect", {html: {include: "item_artifact_thin_thick_marker.html"}, prompt: "marker"},
        "Form", {html: {include: "property_judgment.html"}}],

    // Book
    [["item-book",44], 
        "PictureSelect", {html: {include: "item_artifact_thin_thick_book.html"}, prompt: "book"},
        "Form", {html: {include: "property_judgment.html"}}],

    // Noodle
    [["item-noodle", 45],
        "PictureSelect", {html: {include: "item_artifact_short_long_noodle.html"}, prompt: "noodle"},
        "Form", {html: {include: "property_judgment.html"}}],
   
    // Table
    [["item-table", 46],
        "PictureSelect", {html: {include: "item_artifact_short_long_table.html"}, prompt: "table"},
        "Form", {html: {include: "property_judgment.html"}}],

    // Shoe     
    [["item-shoe",47], 
        "PictureSelect", {html: {include: "item_artifact_smooth_bumpy_shoe.html"}, prompt: "shoe"},
        "Form", {html: {include: "property_judgment.html"}}],
                
    // Squash
    [["item-squash",48], 
        "PictureSelect", {html: {include: "item_artifact_smooth_bumpy_squash.html"}, prompt: "squash"},
        "Form", {html: {include: "property_judgment.html"}}],
    

    // Filler_apple
    [["item-filler",49], 
        "PictureSelect", {html: {include: "filler_apple.html"}, prompt: "apple"},
        "Form", {html: {include: "property_judgment.html"}}],

    // Filler_banana
    [["item-filler",50], 
        "PictureSelect", {html: {include: "filler_banana.html"}, prompt: "banana"},
        "Form", {html: {include: "property_judgment.html"}}],

    // Filler_garlic
    [["item-filler",51], 
        "PictureSelect", {html: {include: "filler_garlic.html"}, prompt: "garlic"},
        "Form", {html: {include: "property_judgment.html"}}],

    // Filler_watermelon
    [["item-filler",52], 
        "PictureSelect", {html: {include: "filler_watermelon.html"}, prompt: "watermelon"},
        "Form", {html: {include: "property_judgment.html"}}]

 ];






