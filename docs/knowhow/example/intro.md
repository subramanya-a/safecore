---
sidebar_label: 'Introduction'
description: The Strapi CMS documentation contains all the admin panel related information and the technical information related to the setup, advanced usage, customization, and update of your Strapi 5 application.
displayed_sidebar: DocsySidebar
slug: /example/intro
# pagination_next: cms/quick-start
sidebar_position: 1
tags:
 - introduction
 - concepts
---

# Welcome to the Strapi CMS Documentation!

The Strapi CMS documentation focuses on Strapi 5 and will take you through the complete journey of your Strapi 5 project. From the technical information related to the setup, advanced usage, customization and update of your project, to the management of the admin panel and its content and users.

<ThemedImage
alt="Homepage of the Admin Panel"
sources={{
    light: '/img/assets/getting-started/admin-panel-homepage-2.png',
    dark: '/img/assets/getting-started/admin-panel-homepage-2_DARK.png',
  }}
/>

:::insight Where to start as a beginner?
If you're totally new to **Strapi** <Annotation>**💡 Did you know?**<br />The original purpose of the project was to help Boot**strap** your **API**: that's where the Strapi name comes from and how Strapi was created.<br /><br />Now, Strapi is an **open-source headless CMS** that gives developers the freedom to choose their favorite tools and frameworks and allows editors to manage and distribute their content using their application's admin panel.<br /><br />Based on a plugin system, Strapi is a flexible CMS whose admin panel and API are extensible — and which every part is customizable to match any use case. Strapi also has a built-in user system to manage in detail what the administrators and end users have access to.<br /></Annotation>, we suggest you to:

1. Head over to the [Quick Start](/cms/quick-start) guide.
2. Learn about the Admin Panel and the 2 main parts of the Strapi CMS: the Content Manager and Content-type Builder.
3. Go through the available Strapi features, each fully documented in their own page. Perhaps you could be interested by Draft & Publish, Internationalization or Static Preview?
:::

The table of content of the Strapi CMS documentation displays 7 main sections in an order that should correspond to your journey with the product. Click on the cards to be redirected to the introduction of the section, or to the most read page of that section.

<CustomDocCardsWrapper>

<CustomDocCard icon="rocket" title="Getting Started" description="Install and deploy Strapi, then start using the admin panel. Recommended read for beginners!" link="/cms/installation" />

<CustomDocCard icon="backpack" title="Features" description="Learn about the Strapi features, and how to configure and use them." link="/cms/features/api-tokens" />

<CustomDocCard icon="cube" title="APIs" description="Query your content with REST, GraphQL, and Strapi's lower-level APIs." link="/cms/api/content-api" />

<CustomDocCard icon="gear-fine" title="Configurations" description="Follow the instructions to handle the base and additional configurations for your project." link="/cms/configurations" />

<CustomDocCard icon="laptop" title="Development" description="Customize the Strapi server and admin panel. Learn about the most advanced options for your project." link="/cms/customization" />

<CustomDocCard icon="puzzle-piece" title="Plugins" description="Use Strapi built-in plugins or develop your own plugins." link="/cms/plugins/installing-plugins-via-marketplace" />

<CustomDocCard icon="escalator-up" title="Upgrade" description="Upgrade your application to the most recent Strapi versions." link="/cms/migration/v4-to-v5/introduction-and-faq" />

</CustomDocCardsWrapper>

:::tip Tips to make the best of the docs
- If you already know exactly what you're searching for, use the search bar or navigate using the table of content.
- If you prefer learning more about Strapi while looking at the project code structure, you can use the interactive [project structure](/cms/project-structure) page.
- If demos are more your thing, feel free to watch the <ExternalLink to="https://youtu.be/zd0_S_FPzKg" text="video demo"/>, or you can request a <ExternalLink to="https://strapi.io/demo" text="live demo"/>.
- Try our AI assistant: Click or tap the **Ask AI** button and ask your questions using natural language. Watch it answer you in real time, then read recommended sources for more details.
- To help you integrate Strapi Docs with your favorite AI models, you can use the dropdown at the top of each page to **Copy Markdown** or visit the [`llms.txt`](/llms.txt) and [`llms-full.txt`](/llms-full.txt) pages.
:::

:::insight Information for beginner developers
Some parts of the CMS documentation (e.g. APIs, Configuration, Development) are mostly intended to developers and assume some prior knowledge of the JavaScript ecosystem.

If you also make your first steps with JavaScript web development while discovering Strapi, we encourage you to read more about <ExternalLink to="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics" text="JavaScript" /> and <ExternalLink to="https://docs.npmjs.com/about-npm" text="npm" />. If applicable to your project, you can also learn about <ExternalLink text="TypeScript" to="https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html" /> before diving deeper into these technical parts of the CMS documentation.
:::

import InstallPrerequisites from '/docs/snippets/installation-prerequisites.md'

# Quick Start Guide

Strapi offers a lot of flexibility. Whether you want to go fast and quickly see the final result, or would rather dive deeper into the product, we got you covered. For this tutorial, we'll go for the DIY approach and build a project and content structure from scratch, then deploy your project to Strapi Cloud to add data from there.

*Estimated completion time: 5-10 minutes*

:::prerequisites
<InstallPrerequisites components={props.components} />

You will also need to <ExternalLink to="https://github.com/git-guides/install-git" text="install `git`"/> and to have a <ExternalLink to="https://github.com" text="GitHub"/> account to deploy your project to Strapi Cloud.
:::

## <Icon name="rocket-launch"/> Part A: Create a new project with Strapi

We will first create a new Strapi project on your machine by running a command in the terminal, and then register our first local administrator user.

Follow the steps below by clicking on the togglable content to read more instructions.

<details open>
<summary>Step 1: Run the installation script and create a Strapi Cloud account</summary>

### Step 1: Run the installation script and create a Strapi Cloud account

1. Run the following command in a terminal:

    <TabItem value="npm" label="NPM">

    ```bash
    npx create-strapi@latest my-strapi-project
    ```

    </TabItem>

2. The terminal will prompt you to log in or sign up. Once you do, a 30-day trial of the <GrowthBadge tooltip="The CMS Growth plan includes the Live Preview, Releases, and Content History features."/> plan will be automatically applied to your project. Ensure `Login/Sign up` is selected in the terminal, or use arrow keys to select it, and press Enter.

3. In the new browser tab that opens, ensure the confirmation code is the same as in the terminal and click **Confirm**.

4. Still in the browser tab, click **Continue with GitHub**. If you are not already logged in into GitHub with your current browser session, you might be redirected to a GitHub login page.

5. Once logged in, the browser will display a "Congratulations, you're all set!" message and you can safely close the browser tab and get back to the terminal.

    <ThemedImage
      alt="Login GIF"
      sources={{
        light: '/img/assets/quick-start-guide/qsg-cloud-login.gif',
        dark: '/img/assets/quick-start-guide/qsg-cloud-login.gif',
      }}
    />

6. The terminal will now ask you a few questions. Press `Enter` to accept the default answer to all questions.

    ![Questions and answers from the terminal](/img/assets/quick-start-guide/qsg-questions-answers-terminal.png)

As you will see in the terminal, your project is now building locally.

:::info

* The folder of your project will include a `.strapi-cloud.json` file used to link the local Strapi project on your machine to the Strapi servers.
* Many more installation options are available. Please refer to the [installation documentation](/cms/installation) for details.
:::

</details>

<details>
<summary>Step 2: Register the first local administrator user</summary>

### Step 2: Register the first local administrator user

Once the installation is complete, you need to start the server. In the terminal, type `cd my-strapi-project && npm run develop` and your browser automatically opens a new tab.

:::tip
As long as you stay in the `my-strapi-project` folder, you will just need to run `npm run develop` any time you want to start the Strapi server again.
:::

By completing the form, you create your own account. Once done, you become the first administrator user of this Strapi application. Welcome aboard, commander!

You now have access to the <ExternalLink to="http://localhost:1337/admin" text="admin panel"/>:

<ThemedImage
alt="Admin panel screenshot: dashboard"
sources={{
    light: '/img/assets/quick-start-guide/qsg-handson-part1-01-admin_panel-v5.png',
    dark: '/img/assets/quick-start-guide/qsg-handson-part1-01-admin_panel-v5_DARK.png',
}}
/> 

</details>

:::callout <Icon name="confetti" /> Congratulations!
You have just created a new Strapi project! You can start playing with Strapi and discover the [Content Manager](/cms/features/content-manager) by yourself, or proceed to part B below.
:::

## <Icon name="wrench" /> Part B: Build your content structure with the Content-type Builder


## <Icon name="fast-forward"/> What to do next?

Now that you know the basics of creating and publishing content with Strapi, we encourage you to explore and dig deeper into some Strapi features:

<Icon name="arrow-fat-right"/> learn how to use Strapi's [REST](/cms/api/rest) API to query the content,<br/>
<Icon name="arrow-fat-right"/> learn more about Strapi features by browsing the <Icon name="backpack" /> **Features** category,<br/>
<Icon name="arrow-fat-right"/> learn more about Strapi Cloud projects by reading the [Cloud Documentation](/cloud/intro),<br/>
<Icon name="arrow-fat-right"/> and [customize your Strapi back end](/cms/backend-customization) and [admin panel](/cms/admin-panel-customization) for advanced use cases.<br/>
