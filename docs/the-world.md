# The World

Place names that use a common linguistic origin will allude to life and history in your world. *Wyrd* uses Old English, but you can find inspiration from any language.


## Settlement Generator

Choose or roll d20s and combine results to create a Settlement. Add an ‘s’ or ‘in’ between any 2-3 parts. Optionally preface with "New" or "Old." Translations noted in parenthesis.

<ol class="d36-table">
    <li
        v-for="item in atWorldSettlementNameParts"
    >
        {{ item.fields.Item }}
        <span v-if="item.fields.Translation">({{ item.fields.Translation }})</span>
    </li>
</ol>

### Towns & Villages

<ol class="d36-table">
    <li
        v-for="item in atWorldSettlementNames"
    >
        {{ item.fields.Item }}
    </li>
</ol>

## Region Generator

Combine a [Region Trait]() and a [Region Biome]() to create an evocative name for that land.

### Region Traits

<ol class="d36-table">
    <li
        v-for="item in atWorldRegionTraits"
    >
        {{ item.fields.Item }}
    </li>
</ol>

### Region Biomes

<ol class="d36-table">
    <li
        v-for="item in atWorldRegionBiomes"
    >
        {{ item.fields.Item }}
    </li>
</ol>

## Environment Hazards

<ol class="d36-table">
    <li
        v-for="item in atWorldEnvironmentHazards"
    >
        {{ item.fields.Item }}
    </li>
</ol>

## Divine Domains

Use for a focus for gods/ religion in the World.

<ol class="d36-table">
    <li
        v-for="item in atWorldDivineDomains"
    >
        {{ item.fields.Item }}
    </li>
</ol>

## World Events

Use for overarching themes of the campaign.

<ol class="d36-table">
    <li
        v-for="item in atWorldWorldEvents"
    >
        {{ item.fields.Item }}
    </li>
</ol>

## Dangerous Places

<ol class="d36-table">
    <li
        v-for="item in atWorldDangerousPlaces"
    >
        {{ item.fields.Item }}
    </li>
</ol>

## Dungeon Entrances

<ol class="d36-table">
    <li
        v-for="item in atWorldDungeonEntrances"
    >
        {{ item.fields.Item }}
    </li>
</ol>

## Dungeon Hazards

Put traps in plain sight and allow PCs time to come up with a solution.

<ol class="d36-table">
    <li
        v-for="item in atWorldDungeonHazards"
    >
        {{ item.fields.Item }}
    </li>
</ol>
