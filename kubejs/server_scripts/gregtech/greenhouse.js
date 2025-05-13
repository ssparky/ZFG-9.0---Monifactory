/**
 * Greenhouse multiblock
 */

ServerEvents.recipes(event => {

    /*   Machine Recipe  */

    event.shaped('gtceu:greenhouse', [
        'AWA',
        'ASA',
        'WAW'
    ], {
        A: '#gtceu:circuits/mv',
        W: 'gtceu:copper_single_cable',
        S: 'gtceu:solid_machine_casing'
    }).id('kubejs:shaped/greenhouse')


    /*  Greenhouse Recipes  */

    function boost(input, factor) {
        let boosted = [];
        input.forEach(element => {
            let item = Item.of(element);
            let curCount = item.getCount() * factor;
            let type = item.getId();
            while (curCount > item.maxStackSize) {
                boosted.push(Item.of(type, item.maxStackSize));
                curCount -= item.maxStackSize;
            }
            if (curCount > 0) boosted.push(Item.of(type, curCount));
        })
        return boosted;
    }

    function Greenhouse(mod, input, duration, output, inputFeedbackAmount) {
        // Create new boosted output item array
        let boostedOutputs = boost(output, 2)

        // Push sapling/seed inputs (unboosted) onto output arrays
        if (inputFeedbackAmount > 0) {
            output.push(Item.of(`${mod}:${input}`, inputFeedbackAmount));
            boostedOutputs.push(Item.of(`${mod}:${input}`, inputFeedbackAmount));
        }

        event.recipes.gtceu.greenhouse(`kubejs:${input}`)
            .circuit(1)
            .notConsumable(InputItem.of(Item.of(`${mod}:${input}`)))
            .inputFluids(Fluid.of('minecraft:water', 24000))
            .itemOutputs(output)
            .duration(duration)
            .EUt(80)
        event.recipes.gtceu.greenhouse(`kubejs:${input}_boosted`)
            .circuit(2)
            .notConsumable(InputItem.of(Item.of(`${mod}:${input}`)))
            .itemInputs('1x gtceu:fertilizer')
            .inputFluids(Fluid.of('minecraft:water', 16000))
            .itemOutputs(boostedOutputs)
            .duration(duration / 2)
            .EUt(80)
    }


    // //// Trees //////
    Greenhouse('gtceu', 'rubber_sapling', 1280, ['32x gtceu:rubber_log', '8x gtceu:sticky_resin'], 4)
    Greenhouse('minecraft', 'oak_sapling', 1280, ['64x minecraft:oak_log'], 4)
    Greenhouse('minecraft', 'dark_oak_sapling', 1280, ['64x minecraft:dark_oak_log'], 4)
    Greenhouse('minecraft', 'spruce_sapling', 1280, ['64x minecraft:spruce_log'], 4)
    Greenhouse('minecraft', 'birch_sapling', 1280, ['64x minecraft:birch_log'], 4)
    Greenhouse('minecraft', 'acacia_sapling', 1280, ['64x minecraft:acacia_log'], 4)
    Greenhouse('minecraft', 'jungle_sapling', 1280, ['64x minecraft:jungle_log'], 4)
    Greenhouse('minecraft', 'azalea', 1280, ['64x minecraft:oak_log'], 4)
    Greenhouse('minecraft', 'flowering_azalea', 1280, ['64x minecraft:oak_log'], 4)
    Greenhouse('minecraft', 'cherry_sapling', 1280, ['64x minecraft:cherry_log'], 4)
    Greenhouse('minecraft', 'mangrove_propagule', 1280, ['64x minecraft:mangrove_log'], 4)
    Greenhouse('minecraft', 'chorus_flower', 1280, ['32x minecraft:chorus_fruit'], 4)
    Greenhouse('minecraft', 'warped_fungus', 1280, ['64x minecraft:warped_stem', '32x minecraft:warped_wart_block', '16x minecraft:shroomlight'], 4)
    Greenhouse('minecraft', 'crimson_fungus', 1280, ['64x minecraft:crimson_stem', '32x minecraft:nether_wart_block', '16x minecraft:shroomlight'], 4)
    Greenhouse('thermal', 'rubberwood_sapling', 1280, ['64x thermal:rubberwood_log'], 4)
    Greenhouse('ars_nouveau', 'blue_archwood_sapling', 1280, ['64x ars_nouveau:blue_archwood_log', '4x ars_nouveau:frostaya_pod'], 4)
    Greenhouse('ars_nouveau', 'red_archwood_sapling', 1280, ['64x ars_nouveau:red_archwood_log', '4x ars_nouveau:bombegranate_pod'], 4)
    Greenhouse('ars_nouveau', 'green_archwood_sapling', 1280, ['64x ars_nouveau:green_archwood_log', '4x ars_nouveau:mendosteen_pod'], 4)
    Greenhouse('ars_nouveau', 'purple_archwood_sapling', 1280, ['64x ars_nouveau:purple_archwood_log', '4x ars_nouveau:bastion_pod'], 4)
    Greenhouse('vinery', 'dark_cherry_sapling', 1280, ['64x vinery:dark_cherry_log', '12x vinery:cherry'], 4)
    Greenhouse('vinery', 'apple_tree_sapling', 1280, ['64x vinery:apple_log', '12x minecraft:apple'], 4)
    Greenhouse('regions_unexplored', 'alpha_sapling', 1280, ['64x regions_unexplored:alpha_log'], 4)
    Greenhouse('regions_unexplored', 'apple_oak_sapling', 1280, ['64x minecraft:oak_log', '12x minecraft:apple'], 4)
    Greenhouse('regions_unexplored', 'ashen_sapling', 1280, ['64x regions_unexplored:ashen_log'], 4)
    Greenhouse('regions_unexplored', 'bamboo_sapling', 1280, ['64x regions_unexplored:bamboo_log'], 4)
    Greenhouse('regions_unexplored', 'baobab_sapling', 1280, ['64x regions_unexplored:baobab_log'], 4)
    Greenhouse('regions_unexplored', 'blackwood_sapling', 1280, ['64x regions_unexplored:blackwood_log'], 4)
    Greenhouse('regions_unexplored', 'brimwood_sapling', 1280, ['64x regions_unexplored:brimwood_log'], 4)
    Greenhouse('regions_unexplored', 'cobalt_sapling', 1280, ['64x regions_unexplored:cobalt_log', '4x gtceu:cobalt_dust'], 4)
    Greenhouse('regions_unexplored', 'cypress_sapling', 1280, ['64x regions_unexplored:cypress_log'], 4)
    Greenhouse('regions_unexplored', 'dead_pine_sapling', 1280, ['64x regions_unexplored:dead_log'], 4)
    Greenhouse('regions_unexplored', 'dead_sapling', 1280, ['64x regions_unexplored:dead_log'], 4)
    Greenhouse('regions_unexplored', 'eucalyptus_sapling', 1280, ['64x regions_unexplored:eucalyptus_log'], 4)
    Greenhouse('regions_unexplored', 'flowering_sapling', 1280, ['64x minecraft:oak_log'], 4)
    Greenhouse('regions_unexplored', 'joshua_sapling', 1280, ['64x regions_unexplored:joshua_log'], 4)
    Greenhouse('regions_unexplored', 'kapok_sapling', 1280, ['64x regions_unexplored:kapok_log', '4x gtceu:sticky_resin'], 4)
    Greenhouse('regions_unexplored', 'larch_sapling', 1280, ['64x regions_unexplored:larch_log'], 4)
    Greenhouse('regions_unexplored', 'golden_larch_sapling', 1280, ['64x regions_unexplored:larch_log'], 4)
    Greenhouse('regions_unexplored', 'magnolia_sapling', 1280, ['64x regions_unexplored:magnolia_log'], 4)
    Greenhouse('regions_unexplored', 'blue_magnolia_sapling', 1280, ['64x regions_unexplored:magnolia_log'], 4)
    Greenhouse('regions_unexplored', 'pink_magnolia_sapling', 1280, ['64x regions_unexplored:magnolia_log'], 4)
    Greenhouse('regions_unexplored', 'white_magnolia_sapling', 1280, ['64x regions_unexplored:magnolia_log'], 4)
    Greenhouse('regions_unexplored', 'maple_sapling', 1280, ['64x regions_unexplored:maple_log'], 4)
    Greenhouse('regions_unexplored', 'orange_maple_sapling', 1280, ['64x regions_unexplored:maple_log'], 4)
    Greenhouse('regions_unexplored', 'red_maple_sapling', 1280, ['64x regions_unexplored:maple_log'], 4)
    Greenhouse('regions_unexplored', 'mauve_sapling', 1280, ['64x regions_unexplored:mauve_log'], 4)
    Greenhouse('regions_unexplored', 'palm_sapling', 1280, ['64x regions_unexplored:palm_log'], 4)
    Greenhouse('regions_unexplored', 'pine_sapling', 1280, ['64x regions_unexplored:pine_log'], 4)
    Greenhouse('regions_unexplored', 'redwood_sapling', 1280, ['64x regions_unexplored:redwood_log'], 4)
    Greenhouse('regions_unexplored', 'silver_birch_sapling', 1280, ['64x regions_unexplored:silver_birch_log'], 4)
    Greenhouse('regions_unexplored', 'enchanted_birch_sapling', 1280, ['64x regions_unexplored:silver_birch_log'], 4)
    Greenhouse('regions_unexplored', 'small_oak_sapling', 1280, ['32x regions_unexplored:small_oak_log'], 4)
    Greenhouse('regions_unexplored', 'socotra_sapling', 1280, ['64x regions_unexplored:socotra_log'], 4)
    Greenhouse('regions_unexplored', 'willow_sapling', 1280, ['64x regions_unexplored:willow_log'], 4)
    Greenhouse('regions_unexplored', 'blue_bioshroom', 1280, ['64x regions_unexplored:blue_bioshroom_stem', '32x regions_unexplored:blue_bioshroom_block', '8x regions_unexplored:glowing_blue_bioshroom_block'], 4)
    Greenhouse('regions_unexplored', 'green_bioshroom', 1280, ['64x regions_unexplored:green_bioshroom_stem', '32x regions_unexplored:green_bioshroom_block', '8x regions_unexplored:glowing_green_bioshroom_block'], 4)
    Greenhouse('regions_unexplored', 'pink_bioshroom', 1280, ['64x regions_unexplored:pink_bioshroom_stem', '32x regions_unexplored:pink_bioshroom_block', '8x regions_unexplored:glowing_pink_bioshroom_block'], 4)
    Greenhouse('regions_unexplored', 'yellow_bioshroom', 1280, ['64x regions_unexplored:yellow_bioshroom_stem', '32x regions_unexplored:yellow_bioshroom_block', '8x regions_unexplored:glowing_yellow_bioshroom_block'], 4)
    Greenhouse('endlessbiomes', 'penumbral_fungus', 1280, ['64x endlessbiomes:penumbra_stem', '16x endlessbiomes:penumbral_vines', '2x endlessbiomes:penumbral_bulb'])
    Greenhouse('endlessbiomes', 'twisted_roots', 1280, ['8x endlessbiomes:twisted_stem', '16x endlessbiomes:twisted_canopy'])

    // //// Crops //////
    Greenhouse('minecraft', 'sugar_cane', 640, ['32x minecraft:sugar_cane'], 0)
    // TODO: Increase water requirement for Kelp
    Greenhouse('minecraft', 'kelp', 640, ['32x minecraft:kelp'], 0)
    Greenhouse('minecraft', 'bamboo', 640, ['48x minecraft:bamboo'], 0)
    Greenhouse('minecraft', 'cactus', 640, ['32x minecraft:cactus'], 0)
    Greenhouse('minecraft', 'wheat_seeds', 640, ['32x minecraft:wheat'], 0)
    Greenhouse('minecraft', 'carrot', 640, ['32x minecraft:carrot'], 0)
    Greenhouse('minecraft', 'potato', 640, ['32x minecraft:potato'], 0)
    Greenhouse('minecraft', 'beetroot_seeds', 640, ['32x minecraft:beetroot'], 0)
    Greenhouse('minecraft', 'sweet_berries', 640, ['32x minecraft:sweet_berries'], 0)
    Greenhouse('minecraft', 'glow_berries', 640, ['32x minecraft:glow_berries'], 0)
    Greenhouse('minecraft', 'cocoa_beans', 640, ['32x minecraft:cocoa_beans'], 0)
    Greenhouse('minecraft', 'sea_pickle', 640, ['32x minecraft:sea_pickle'], 0)
    Greenhouse('minecraft', 'melon_seeds', 640, ['16x minecraft:melon'], 0)
    Greenhouse('minecraft', 'pumpkin_seeds', 640, ['16x minecraft:pumpkin'], 0)
    Greenhouse('minecraft', 'nether_wart', 640, ['16x minecraft:nether_wart'], 0)
    Greenhouse('minecraft', 'red_mushroom', 640, ['16x minecraft:red_mushroom'], 0)
    Greenhouse('minecraft', 'brown_mushroom', 640, ['16x minecraft:brown_mushroom'], 0)
    Greenhouse('supplementaries', 'flax_seeds', 640, ['16x supplementaries:flax'], 0)
    Greenhouse('ars_nouveau', 'magebloom', 640, ['8x ars_nouveau:magebloom'], 0)
    Greenhouse('ars_nouveau', 'sourceberry', 640, ['16x ars_nouveau:sourceberry'], 0)
    Greenhouse('farmersdelight', 'rice_panicle', 640, ['16x farmersdelight:rice_panicle'], 0)
    Greenhouse('farmersdelight', 'cabbage_seeds', 640, ['16x farmersdelight:cabbage'], 0)
    Greenhouse('farmersdelight', 'tomato_seeds', 640, ['16x farmersdelight:tomato'], 0)
    Greenhouse('farmersdelight', 'onion', 640, ['16x farmersdelight:onion'], 0)
    Greenhouse('farmersdelight' ,'brown_mushroom_colony', 640, ['8x minecraft:brown_mushroom'], 0)
    Greenhouse('farmersdelight' ,'red_mushroom_colony', 640, ['8x minecraft:red_mushroom'], 0)
    Greenhouse('farm_and_charm', 'kernels', 640, ['16x farm_and_charm:corn'], 0)
    Greenhouse('farm_and_charm', 'oat_seeds', 640, ['16x farm_and_charm:oat'], 0)
    Greenhouse('farm_and_charm', 'barley_seeds', 640, ['16x farm_and_charm:barley'], 0)
    Greenhouse('farm_and_charm', 'lettuce_seeds', 640, ['16x farm_and_charm:lettuce'], 0)
    // Greenhouse('farm_and_charm', 'onion', 640, ['16x farm_and_charm:onion'], 0) - commented out to prevent recipe id conflict with Farmers Delight
    // Greenhouse('farm_and_charm', 'tomato_seeds', 640, ['16x farm_and_charm:tomato'], 0) - commented out to prevent recipe id conflict with Farmers Delight
    Greenhouse('farm_and_charm', 'strawberry_seeds', 640, ['16x farm_and_charm:strawberry'], 0)
    Greenhouse('farm_and_charm', 'wild_nettle', 640, ['8x farm_and_charm:wild_nettle'], 0)
    Greenhouse('farm_and_charm', 'wild_ribwort', 640, ['8x farm_and_charm:wild_ribwort'], 0)
    Greenhouse('brewery', 'hops_seeds', 640, ['16x brewery:hops'], 0)
    Greenhouse('vinery', 'red_grape_seeds', 640, ['16x vinery:red_grape'], 0)
    Greenhouse('vinery', 'white_grape_seeds', 640, ['16x vinery:white_grape'], 0)
    Greenhouse('vinery', 'savanna_grape_seeds_red', 640, ['16x vinery:savanna_grapes_red'], 0)
    Greenhouse('vinery', 'savanna_grape_seeds_white', 640, ['16x vinery:savanna_grapes_white'], 0)
    Greenhouse('vinery', 'taiga_grape_seeds_red', 640, ['16x vinery:taiga_grapes_red'], 0)
    Greenhouse('vinery', 'taiga_grape_seeds_white', 640, ['16x vinery:taiga_grapes_white'], 0)
    Greenhouse('vinery', 'jungle_grape_seeds_red', 640, ['16x vinery:jungle_grapes_red'], 0)
    Greenhouse('vinery', 'jungle_grape_seeds_white', 640, ['16x vinery:jungle_grapes_white'], 0)
    Greenhouse('rusticdelight', 'cotton_seeds', 640, ['16x rusticdelight:cotton_boll'], 0)
    Greenhouse('rusticdelight', 'bell_pepper_green', 640, ['16x rusticdelight:bell_pepper_green'], 0)
    Greenhouse('rusticdelight', 'bell_pepper_red', 640, ['16x rusticdelight:bell_pepper_red'], 0)
    Greenhouse('rusticdelight', 'bell_pepper_yellow', 640, ['16x rusticdelight:bell_pepper_yellow'], 0)
    Greenhouse('rusticdelight', 'coffee_beans', 640, ['16x rusticdelight:coffee_beans'], 0)
    Greenhouse('regions_unexplored', 'salmonberry', 640, ['16x regions_unexplored:salmonberry'], 0)
    Greenhouse('regions_unexplored', 'hanging_earlight_fruit', 640, ['16x regions_unexplored:hanging_earlight_fruit'], 0)
    Greenhouse('regions_unexplored', 'duskmelon_slice', 640, ['16x regions_unexplored:duskmelon_slice'], 0)
    Greenhouse('nethersdelight', 'crimson_fungus_colony', 640, ['8x minecraft:crimson_fungus'], 0)
    Greenhouse('nethersdelight', 'warped_fungus_colony', 640, ['8x minecraft:warped_fungus'], 0)
    Greenhouse('nethersdelight', 'propelplant_torch', 640, ['4x nethersdelight:propelplant_torch', '16x nethersdelight:propelplant_cane'], 0);
    
    // //// Flowers & Cosmetic Blocks //////
    let flowers = [
        'wither_rose',
        'cornflower',
        'sunflower',
        'peony',
        'red_tulip',
        'poppy',
        'rose_bush',
        'blue_orchid',
        'orange_tulip',
        'dandelion',
        'pink_tulip',
        'pink_petals',
        'allium',
        'lilac',
        'lily_of_the_valley',
        'oxeye_daisy',
        'azure_bluet',
        'white_tulip',
        'pitcher_plant',
        'lily_pad',
        'weeping_vines',
        'twisting_vines',
        'vine',
        'moss_block',
        'glow_lichen',
        'tube_coral_fan',
        'brain_coral_fan',
        'bubble_coral_fan',
        'fire_coral_fan',
        'horn_coral_fan'
    ]
    flowers.forEach(flower => {
        Greenhouse('minecraft', flower, 640, [Item.of(flower, 48)], 0);
    })
    // Torchflowers are grown from seeds
    Greenhouse('minecraft', 'torchflower_seeds', 640, [Item.of('torchflower', 48)], 0);
    // Modded (non-minecraft) flowers
    Greenhouse('friendsandfoes', 'buttercup', 640, [Item.of('friendsandfoes:buttercup', 48)], 0);
    Greenhouse('endlessbiomes', 'ender_fern_sprouts', 640, [Item.of('endlessbiomes:ender_ferns', 48)], 0);
    Greenhouse('endlessbiomes', 'ender_root_spindles', 640, [Item.of('endlessbiomes:ender_roots', 48)], 0);
    Greenhouse('iceandfire', 'fire_lily', 640, [Item.of('iceandfire:fire_lily', 8)], 0);
    Greenhouse('iceandfire', 'frost_lily', 640, [Item.of('iceandfire:frost_lily', 8)], 0);
    Greenhouse('iceandfire', 'lightning_lily', 640, [Item.of('iceandfire:lightning_lily', 8)], 0);
    Greenhouse('regions_unexplored', 'alpha_dandelion', 640, [Item.of('regions_unexplored:alpha_dandelion', 48)], 0);
    Greenhouse('regions_unexplored', 'alpha_rose', 640, [Item.of('regions_unexplored:alpha_rose', 48)], 0);
    Greenhouse('regions_unexplored', 'aster', 640, [Item.of('regions_unexplored:aster', 48)], 0);
    Greenhouse('regions_unexplored', 'bleeding_heart', 640, [Item.of('regions_unexplored:bleeding_heart', 48)], 0);
    Greenhouse('regions_unexplored', 'daisy', 640, [Item.of('regions_unexplored:daisy', 48)], 0);
    Greenhouse('regions_unexplored', 'dorcel', 640, [Item.of('regions_unexplored:dorcel', 48)], 0);
    Greenhouse('regions_unexplored', 'felicia_daisy', 640, [Item.of('regions_unexplored:felicia_daisy', 48)], 0);
    Greenhouse('regions_unexplored', 'fireweed', 640, [Item.of('regions_unexplored:fireweed', 48)], 0);
    Greenhouse('regions_unexplored', 'glistening_bloom', 640, [Item.of('regions_unexplored:glistening_bloom', 48)], 0);
    Greenhouse('regions_unexplored', 'hibiscus', 640, [Item.of('regions_unexplored:hibiscus', 48)], 0);
    Greenhouse('regions_unexplored', 'hyssop', 640, [Item.of('regions_unexplored:hyssop', 48)], 0);
    Greenhouse('regions_unexplored', 'mallow', 640, [Item.of('regions_unexplored:mallow', 48)], 0);
    Greenhouse('regions_unexplored', 'poppy_bush', 640, [Item.of('regions_unexplored:poppy_bush', 48)], 0);
    Greenhouse('regions_unexplored', 'salmon_poppy_bush', 640, [Item.of('regions_unexplored:salmon_poppy_bush', 48)], 0);
    Greenhouse('regions_unexplored', 'tsubaki', 640, [Item.of('regions_unexplored:tsubaki', 48)], 0);
    Greenhouse('regions_unexplored', 'waratah', 640, [Item.of('regions_unexplored:waratah', 48)], 0);
    Greenhouse('regions_unexplored', 'white_trillium', 640, [Item.of('regions_unexplored:white_trillium', 48)], 0);
    Greenhouse('regions_unexplored', 'wilting_trillium', 640, [Item.of('regions_unexplored:wilting_trillium', 48)], 0);
    Greenhouse('regions_unexplored', 'blue_lupine', 640, [Item.of('regions_unexplored:blue_lupine', 48)], 0);
    Greenhouse('regions_unexplored', 'pink_lupine', 640, [Item.of('regions_unexplored:pink_lupine', 48)], 0);
    Greenhouse('regions_unexplored', 'purple_lupine', 640, [Item.of('regions_unexplored:purple_lupine', 48)], 0);
    Greenhouse('regions_unexplored', 'red_lupine', 640, [Item.of('regions_unexplored:red_lupine', 48)], 0);
    Greenhouse('regions_unexplored', 'yellow_lupine', 640, [Item.of('regions_unexplored:yellow_lupine', 48)], 0);
    Greenhouse('regions_unexplored', 'cobalt_earlight', 640, [Item.of('regions_unexplored:cobalt_earlight', 48)], 0);
    Greenhouse('regions_unexplored', 'orange_coneflower', 640, [Item.of('regions_unexplored:orange_coneflower', 48)], 0);
    Greenhouse('regions_unexplored', 'purple_coneflower', 640, [Item.of('regions_unexplored:purple_coneflower', 48)], 0);
    Greenhouse('regions_unexplored', 'white_snowbelle', 640, [Item.of('regions_unexplored:white_snowbelle', 48)], 0);
    Greenhouse('regions_unexplored', 'day_lily', 640, [Item.of('regions_unexplored:day_lily', 48)], 0);
    Greenhouse('regions_unexplored', 'meadow_sage', 640, [Item.of('regions_unexplored:meadow_sage', 48)], 0);
    Greenhouse('regions_unexplored', 'tassel', 640, [Item.of('regions_unexplored:tassel', 48)], 0);
    Greenhouse('regions_unexplored', 'mycotoxic_daisy', 640, [Item.of('regions_unexplored:mycotoxic_daisy', 48)], 0);
    Greenhouse('regions_unexplored', 'barrel_cactus', 640, [Item.of('regions_unexplored:barrel_cactus', 8)], 0);
    Greenhouse('regions_unexplored', 'cave_hyssop', 640, [Item.of('regions_unexplored:cave_hyssop', 48)], 0);
    Greenhouse('regions_unexplored', 'duckweed', 640, [Item.of('regions_unexplored:duckweed', 48)], 0);
    Greenhouse('regions_unexplored', 'flowering_lily_pad', 640, [Item.of('regions_unexplored:flowering_lily_pad', 16)], 0);
    Greenhouse('nethersdelight', 'mimicarnation', 640, [Item.of('nethersdelight:mimicarnation', 48)], 0);
})

ServerEvents.recipes(event => {
    event.custom({
        type: 'thermal:insolator',
        "ingredient": {
            "item": "gtceu:rubber_sapling"
        },
        "result": [
            {
                "item": "gtceu:rubber_log",
                "chance": 6.0
            },
            {
                "item": "gtceu:sticky_resin",
                "chance": 1.25
            },
            {
                "item": "gtceu:rubber_sapling",
                "chance": 1.1
            }
        ],
        "energy_mod": 3.0,
        "water_mod": 3.0
    }).id('kubejs:thermal/insolator/rubber_sapling')

    event.custom({
        type: 'thermal:insolator',
        "ingredient": {
            "item": "minecraft:pink_petals",
        },
        "result": [
            {
                "item": "minecraft:pink_petals",
                "chance": 2.0
            }
        ],
        "energy_mod": 1.0,
        "water_mod": 1.0
    }).id('kubejs:thermal/insolator/pink_petals')
})