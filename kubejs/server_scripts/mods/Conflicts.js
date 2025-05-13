/** This file handles recipes for items that otherwise conflict. */

ServerEvents.recipes((event) => {
    let woodTypes = [
        'oak',
        'spruce',
        'birch',
        'jungle',
        'acacia',
        'dark_oak',
        'mangrove',
        'cherry'
    ]
    let mushroomTypes = [
        'crimson',
        'warped'
    ]

    woodTypes.forEach((wood) => {
        event.remove({id:`decorative_blocks:${wood}_beam`})
        event.remove({id:`redeco:${wood}_pedestal`})
        event.shaped(`decorative_blocks:${wood}_beam`, [
            'BAB',
            ' A ',
            '   '
        ], {
            A: `minecraft:stripped_${wood}_log`,
            B: 'minecraft:stick'
        }).id(`kubejs:decorative_blocks/${wood}_beam`)
        event.shaped(`redeco:${wood}_pedestal`, [
            ' A ',
            'BAB',
            '   '
        ], {
            A: `minecraft:stripped_${wood}_log`,
            B: 'minecraft:stick'
        }).id(`kubejs:redeco/${wood}_pedestal`)
    })

    mushroomTypes.forEach((mushroom) => {
        event.remove({id:`decorative_blocks:${mushroom}_beam`})
        event.remove({id:`redeco:${mushroom}_pedestal`})
        event.shaped(`decorative_blocks:${mushroom}_beam`, [
            'BAB',
            ' A ',
            '   '
        ], {
            A: `minecraft:stripped_${mushroom}_stem`,
            B: 'minecraft:stick'
        }).id(`kubejs:decorative_blocks/${mushroom}_beam`)
        event.shaped(`redeco:${mushroom}_pedestal`, [
            ' A ',
            'BAB',
            '   '
        ], {
            A: `minecraft:stripped_${mushroom}_stem`,
            B: 'minecraft:stick'
        }).id(`kubejs:redeco/${mushroom}_pedestal`)
    })

    // Fix dramaticdoors socotra
    event.remove({id:'dramaticdoors:tall_rue_socotra_door'})
    event.shaped('2x dramaticdoors:tall_rue_socotra_door', [
        ' A',
        ' A',
        ' A'
    ], {
        A: 'regions_unexplored:socotra_door'
    }).id('kubejs:dramaticdoors/tall_rue_socotra_door')

    // Blackstone clusters
    event.remove({id:'regions_unexplored:blackstone_cluster'})

    // Cooking for Blockheads spice rack
    event.remove({id:'cookingforblockheads:spice_rack'})
    event.shaped('cookingforblockheads:spice_rack', [
        '   ',
        'BAB',
        '   '
    ], {
        A: '#minecraft:wooden_slabs',
        B: 'minecraft:stick'
    }).id('kubejs:cookingforblockheads/spice_rack')

    // Multibeds feather pile
    event.remove({id:'multibeds:feather_pile'})
    event.shaped('multibeds:feather_pile', [
        'AA ',
        'AA ',
        '   '
    ], {
        A: 'minecraft:feather'
    }).id('kubejs:multibeds/feather_pile')

    // Supplementaries timber cross brace
    event.remove({id:'supplementaries:timber_cross_brace'})
    event.shaped('supplementaries:timber_cross_brace', [
        'A A',
        ' A ',
        'A A'
    ], {
        A: 'minecraft:stick'
    }).id('kubejs:supplementaries/timber_cross_brace')

    // Supplementaries timber frame
    event.remove({id:'supplementaries:timber_frame'})
    event.shaped('supplementaries:timber_frame', [
        ' A ',
        'AAA',
        ' A '
    ], {
        A: 'minecraft:stick'
    }).id('kubejs:supplementaries/timber_frame')

    // Decorative blocks lattice
    event.remove({id:'decorative_blocks:lattice'})
    event.shaped('decorative_blocks:lattice', [
        'AA ',
        'AAA',
        ' AA'
    ], {
        A: 'minecraft:stick'
    }).id('kubejs:decorative_blocks/lattice')

    // Redeco white paper lantern
    event.remove({id:'redeco:white_paper_lantern'})
    event.shaped('redeco:white_paper_lantern', [
        'AAA',
        'ABA',
        '   '
    ], {
        A: 'minecraft:paper',
        B: 'minecraft:torch'
    }).id('kubejs:redeco/white_paper_lantern')

    // Supplementaries flute - straight up remove
    event.remove({id:'supplementaries:flute'})

    // MCW Windows - Louvered shutters
    let woodShutters = [
        'oak',
        'spruce',
        'birch',
        'jungle',
        'acacia',
        'dark_oak',
        'cherry',
        'mangrove',
        'crimson',
        'warped'
    ]
    let stoneShutters = [
        'andesite',
        'granite',
        'diorite'
    ]

    woodShutters.forEach((wood) => {
        event.remove({id:`mcwwindows:${wood}_louvered_shutter`})
        event.shaped(`mcwwindows:${wood}_louvered_shutter`, [
            ' A ',
            ' B ',
            ' A '
        ], {
            A: `minecraft:${wood}_trapdoor`,
            B: `minecraft:${wood}_slab`
        }).id(`kubejs:mcwwindows/louvered_shutter_${wood}`)
    })

    stoneShutters.forEach((stone) => {
        event.remove({id:`mcwwindows:${stone}_louvered_shutter`})
        event.shaped(`mcwwindows:${stone}_louvered_shutter`, [
            ' A ',
            ' B ',
            ' A '
        ], {
            A: `minecraft:iron_trapdoor`,
            B: `minecraft:${stone}_slab`
        }).id(`kubejs:mcwwindows/louvered_shutter_${stone}`)
    })

})