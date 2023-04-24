# Creating a Streamlined Checkout Widget

Date: 2023-04-21

## Status

Proposed

## Context

Superfluid Protocol is great for re-occuring payments. One of the biggest use-cases for that is subscriptions. To increase the adoption of Superfluid being used for checkouts, we'll create a widget that will make it easy to accept both peer-to-peer and peer-to-merchant payments in Superfluid streams. We'll want the widget to be as easy to include on a web site or in a web app as possible.

The widget will make on-boarding and getting started with Superfluid easy by streamlining the experience from wrapping first tokens, enabling Auto-Wrap, sending the stream etc.

## Decision

We will create a checkout widget using **React**, **MUI**, **TypeScript**, **wagmi** (wallet interactions), **wagmi CLI** (ABI fetching and type generation), **AbiType** (TypeChain alternative), **Zod** (validation library) and **react-hook-form** (form management patterns). The widget will be designed to be minimal (lightweight) and very type-safe, with a focus on ease of use and integration. We will leverage existing patterns from Superfluid Dashboard and Superfluid Console to speed up development. The technologies chosen are aligned with other Superfluid products.

We will use React to create the widget based on the team's experience and Web3 ecosystem wide-spread usage of it. We will use MUI for styling as it has good theme'ing options and is suitable for fast prototyping. Zod will be used for runtime type-checking of user input and the incoming checkout configurations.

We will consider using web components to make the widget even more portable and easy to integrate into any web app. React components can be put into web components, so we will explore this option to make the widget as flexible as possible.

We will keep the logic lightweight and not overly tie it to styling because we want to leave freedom to move away from React and/or MUI if it becomes necessary.

## Consequences

The tech stack allows us build something of high quality (type-safe, performant, maintainable, consistent in visual style) and move fast at the same time.

Leveraging existing patterns from Superfluid Dashboard and Superfluid Console will shorten learning curve and ensure consistency across the Superfluid ecosystem.

Using web components will make the widget even more portable and easy to integrate into any web app.