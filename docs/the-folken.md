# The Folken

Create **Encounters**, **NPCs**, and **Factions** by rolling 2d6 on the tables on this page.

- Roll an [**Encounter**](#city-folk) for the setting
- Roll or choose a [**NPC Trait**](#npc-traits) and [**Goal**](#npc-goals)
- Roll or choose a [**Name**](#names)
- Optionally roll [**Factions**](#factions), [**Faction Traits**](#faction-traits) and [**Goals**](#faction-goals) to build out the world
- Use the [**Hooks**](#hooks) table to generate situations

## City Folk

<ol class="d36-table">
    <li
        v-for="item in atFolkenCityFolk"
    >
        {{ item.fields.Item }}
    </li>
</ol>

## Wilder Folk

<ol class="d36-table">
    <li
        v-for="item in atFolkenWilderFolk"
    >
        {{ item.fields.Item }}
    </li>
</ol>

## Underworld Folk

<ol class="d36-table">
    <li
        v-for="item in atFolkenUnderworldFolk"
    >
        {{ item.fields.Item }}
    </li>
</ol>

## Names

<ol class="d36-table">
    <li
        v-for="item in atFolkenNames"
    >
        {{ item.fields.Item }}
    </li>
</ol>

## Surnames & Noble Houses

<ol class="d36-table">
    <li
        v-for="item in atFolkenSurnames"
    >
        {{ item.fields.Item }}
    </li>
</ol>

## Hooks

Combine with **items**, **locations**, **NPCs**, or **factions**, to generate plot hooks.

<ol class="d36-table">
    <li
        v-for="item in atFolkenHooks"
    >
        {{ item.fields.Item }}
    </li>
</ol>

## NPC Traits

<ol class="d36-table">
    <li
        v-for="item in atFolkenNpcTraits"
    >
        {{ item.fields.Item }}
    </li>
</ol>

## NPC Goals

<ol class="d36-table">
    <li
        v-for="item in atFolkenNpcGoals"
    >
        {{ item.fields.Item }}
    </li>
</ol>

## Factions

<ol class="d36-table">
    <li
        v-for="item in atFolkenFactions"
    >
        {{ item.fields.Item }}
    </li>
</ol>

## Faction Traits

<ol class="d36-table">
    <li
        v-for="item in atFolkenFactionTraits"
    >
        {{ item.fields.Item }}
    </li>
</ol>

## Faction Goals

<ol class="d36-table">
    <li
        v-for="item in atFolkenFactionGoals"
    >
        {{ item.fields.Item }}
    </li>
</ol>
