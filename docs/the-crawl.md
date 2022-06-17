# The Crawl

Create a **map of a location** to explore by rolling a handful of d6s and assemble based on results.

1. **Dead End:** Cannot touch more than 1 die
2. **Passage:** Cannot touch more than 2 dice
3. **Split:** Cannot touch more than 3 dice
4. **Crossroads:** Can touch up to 4 dice
5. **Tower:** Stack all, must touch at least 2 dice
6. **Hall:** Merge all, can touch up to 4 dice

![alt text](https://via.placeholder.com/800x300 "Provided by unsplash.com")

### 1. Define Zones

For each die, add its value to all adjacent dice to determine its main function. Halls and Towers are single zones with all their dice summed.

### 2. Add Details & Secrets

For each zone, roll or choose from the lists.

### 3. Roll Hazard Die

Roll a **Hazard Die** (1d10/2) within a given locale to drive gameplay and introduce complications.

| 1        | 2         | 3         | 4    | 5      |
|:--------:|:---------:|:---------:|:----:|:------:|
| *Setback* | *Depletion* | *Locality* | *Omen* | *Boon* |

To increase tension, the Referee can step up the Hazard Die and roll on the [**Escalating Hazards**](#escalating-hazards) table. Do this after a fight breaks out, an hour of exploration, or any unique event that should raise the stakes.

## Civilization

Hamlet: 6d6, Town: 12d6: City 18d6

<ol class="d36-table">
    <li
        v-for="item in atCrawlCityLocations"
    >
        {{ item.fields.Item }}
    </li>
</ol>

### City Details & Secrets

<ol class="d36-table">
    <li
        v-for="item in atCrawlCityDetails"
    >
        {{ item.fields.Item }}
    </li>
</ol>

### Civilization Hazards

Roll 1/day, 2/day if PCs are looking for trouble

| d5| Result                                                                                                 |
|---|--------------------------------------------------------------------------------------------------------|
| 1 | Encounter *(roll [**City Folk**]((the-folken.md#city-folk))) or [**World Event**](the-world.md#world-events)* |
| 2 | Shortage *(drought, famine, trust, etc)*                                                                   |
| 3 | Advance season *(or other local change)*                                                                  |
| 4 | Foreshadow looming disaster                                                                           |
| 5 | Full recovery                                                                                         |

## Wilderness

Close: 3d6, Middling: 6d6: Distant 12d6

<ol class="d36-table">
    <li
        v-for="item in atCrawlWilderLocations"
    >
        {{ item.fields.Item }}
    </li>
</ol>

### Wilder Details & Secrets

<ol class="d36-table">
    <li
        v-for="item in atCrawlWilderDetails"
    >
        {{ item.fields.Item }}
    </li>
</ol>

### Wilder Hazards

Roll 1/day on roads, 2-3/day in untamed wilds

| d5| Result                                                             |
|---|--------------------------------------------------------------------|
| 1 | Encounter *(roll [**Wilder Folk**]((the-folken.md#wilder-folk)))*      |
| 2 | Roll consumables, rest & eat or take fatigue                       |
| 3 | [**Env. Hazard**](the-world.md#environment-hazards) or become lost |
| 4 | Tracks or clue regarding next encounter                            |
| 5 | Free wilderness turn                                               |

## Dungeons

Contained: 6d6, Large: 12d6: Mega: 18d6

<ol class="d36-table">
    <li
        v-for="item in atCrawlDungeonLocations"
    >
        {{ item.fields.Item }}
    </li>
</ol>

### Dungeon Details & Secrets

<ol class="d36-table">
    <li
        v-for="item in atCrawlDungeonDetails"
    >
        {{ item.fields.Item }}
    </li>
</ol>

### Escalating Hazards

Roll 1/day, 2/day if PCs are looking for trouble

| Step up & roll 1/zone or hour | d5 | d10 | d15 | d20 |
| ----------------------------- |----|-----|-----|-----|
| Encounter *(Escalate challenge)* | 1  | 6   | 11  | 16  |
| Depletion *(Consumables/fatigue)*| 2  | 7   | 12  | 17  |
| Locality *(trap, env. shifts)*   | 3  | 8   | 13  | 18  |
| Omen *(tracks, sensory clue)*    | 4  | 9   | 14  | 19  |
| Boon *(5=free turn, >5=treasure)* | 5  | 10  | 15  | 20  |

## Example Hazards

<div class="flex--lg">
<div class="w33--lg mt2">

### Localities

| d6| Result           |
|---|------------------|
| 1 | Obvious hazard   |
| 2 | Disturbed nature |
| 3 | Blocked progress |
| 4 | Weird mishap     |
| 5 | Social swindle   |
| 6 | Encounter        |

</div>
<div class="w33--lg mt2">

### Omens

| d6| Result                       |
|---|------------------------------|
| 1 | Encounter surprises party    |
| 2 | False lead                   |
| 3 | Interesting smell discovered |
| 4 | Nearby sounds                |
| 5 | Physical traces              |
| 6 | Party surprises encounter    |

</div>
<div class="w33--lg mt2">

### Encounters

| d6| Result                       |
|---|------------------------------|
| 1 | Recurring character          |
| 2 | Primary faction              |
| 3 | Primary faction, intensified |
| 4 | Secondary faction            |
| 5 | Solitary entity or oddity    |
| 6 | Boss                         |

</div>
</div>
