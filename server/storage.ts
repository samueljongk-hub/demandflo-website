import { type User, type InsertUser, type BlogPost, type InsertBlogPost, type ContactSubmission, type InsertContactSubmission } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Blog posts
  getAllBlogPosts(): Promise<BlogPost[]>;
  getPublishedBlogPosts(): Promise<BlogPost[]>;
  getBlogPostById(id: string): Promise<BlogPost | undefined>;
  getBlogPostBySlug(slug: string): Promise<BlogPost | undefined>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
  updateBlogPost(id: string, post: Partial<InsertBlogPost>): Promise<BlogPost | undefined>;
  deleteBlogPost(id: string): Promise<boolean>;
  
  // Contact submissions
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  getAllContactSubmissions(): Promise<ContactSubmission[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private blogPosts: Map<string, BlogPost>;
  private contactSubmissions: Map<string, ContactSubmission>;

  constructor() {
    this.users = new Map();
    this.blogPosts = new Map();
    this.contactSubmissions = new Map();
    
    // Initialize with sample blog posts
    this.initializeSampleData();
  }

  private initializeSampleData() {
    const samplePosts: BlogPost[] = [
      {
        id: randomUUID(),
        title: "How to Master Email Marketing in 2025: A Comprehensive Guide",
        content: `By the end of this guide, you will be able to create and run successful email campaigns that will boost your business growth.

## Why Is Email Marketing So Important?

Email marketing is not a fad. It has been around for a long time, and it is still amazing. According to Statista, over half of the world's population uses email. That's a huge audience you can reach with your awesome messages.

But email is not just a way to say hi. It is also a way to grow your business and achieve your goals, such as:

- **Building brand awareness and loyalty**: Email marketing lets you keep in touch with your prospects and customers, and remind them why you rock. You can also use email to tell your brand story, show off your happy customers, and create a tribe of fans.

- **Increasing leads**: Email marketing can help you generate new leads by offering valuable incentives, such as ebooks, webinars, or free trials, that make your audience want to join your list and stay engaged. You can also use email to nurture your leads and move them along the sales funnel.

- **Increasing sales and revenue**: Email marketing can help you turn more leads into customers, and more customers into loyal buyers. You can use email to promote your products or services, suggest related items, or send friendly reminders to recover lost sales.

- **Enhancing customer retention and loyalty**: Email marketing can help you keep your existing customers happy and loyal. You can use email to deliver useful content, provide customer support, ask for feedback, reward loyalty, or celebrate milestones.

- **Measuring and optimizing your marketing efforts**: Email marketing is one of the easiest and most trackable marketing channels. You can quickly measure and analyze various metrics, such as open rate, click-through rate, conversion rate, bounce rate, unsubscribe rate, or revenue per email.

As you can see, email marketing can help you achieve a lot with little cost and effort. In fact, according to Constant Contact, email marketing has an average return on investment (ROI) of $36 for every $1 spent. That's why email marketing is one of the best and most profitable marketing channels.

## How to Choose the Right Email Marketing Platform and Tools

Before you start sending awesome emails, you need the right tools. The most important tool is an email marketing platform or software. This is a service that lets you create, manage, send, and track your email campaigns.

There are many email marketing platforms out there, each with its own bells and whistles. Some of the popular ones are Mailchimp, Constant Contact, Keap, HubSpot, and Marketo.

When choosing an email marketing platform for your business, you need to think about a few things, such as:

- **Your budget**: How much can you spend on email marketing? Most platforms charge based on how many subscribers or emails you have or send.
- **Your goals**: What do you want to achieve with email marketing? Different platforms may be better or worse for different purposes.
- **Your skills**: How good are you at using email marketing software? Some platforms are easier and simpler than others.
- **Your features**: What features do you need for your email campaigns? Most platforms offer common features such as email templates, drag-and-drop editors, list management, segmentation, personalization, automation, analytics, testing, and support.

## How to Build and Grow Your Email List

Having a good email list is crucial for email marketing. Your email list is your audience, your potential customers, and your loyal fans. Without a good email list, your email marketing efforts will be useless.

Here are some tips and best practices for building and growing your email list:

- **Offer value**: Give something awesome to your subscribers, such as a freebie, a newsletter, a blog post, or a podcast, that solves a problem or satisfies a need for your target audience.
- **Email Personalization**: Customize your content, design, tone, and timing to suit each group or individual. Most people receive too many emails. Offering valuable content that resonates with users will keep them engaged.
- **Segment your email list**: Group your subscribers based on their characteristics, preferences, behaviors, or interests. This will help you personalize your messages and send more relevant and targeted content.
- **Use multiple channels**: Promote your offer and capture leads on different platforms where your audience hangs out, such as your website, blog, social media, landing pages, pop-ups, forms, or ads.
- **Engage your email list**: Keep your subscribers interested and loyal to your brand. Send valuable and consistent content that matches their expectations and needs.

## How to Craft Engaging Email Copy and Design

It's all about the email copy and design. The email copy is the words you use to communicate your message and value. The email design is the way you make your email look nice and easy to read.

Here are some tips to help you write emails that impress your subscribers:

- **Use templates**: Don't reinvent the wheel every time you write an email. Use templates that are ready-made or create your own.
- **Use tools**: Don't rely on your own skills or creativity every time you write an email. Use tools that can help you improve your email copy and design.
- **Use feedback**: Don't rely on your own judgment or opinion every time you write an email. Use feedback from others to improve your email copy and design.

## How to Optimize Your Email Deliverability and Performance

If you want your email campaigns to reach and impress your subscribers, then you need to make sure your emails get delivered to their inbox and achieve your desired outcomes. These are the two main factors that determine the success of your email marketing: email deliverability and email performance.

To optimize both email deliverability and performance, you need to follow some best practices and use some tools that can help you improve your email quality and effectiveness.`,
        excerpt: "By the end of this guide, you will be able to create and run successful email campaigns that will boost your business growth. Learn everything from platform selection to deliverability optimization.",
        category: "Email Marketing",
        readTime: "15 min read",
        imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        slug: "email-marketing-guide",
        published: true,
        createdAt: new Date("2024-12-20"),
        updatedAt: new Date("2024-12-20"),
      },
      {
        id: randomUUID(),
        title: "Cold Email Marketing in 2025: A Conversation That Converts",
        content: `Cold email carries a tough reputation. Average campaigns limp along with roughly 6% opens and fewer than 1% replies. Teams pour hours into writing and list building, then watch messages disappear into the void. The good news: these numbers change fast once each prospect feels the note was written for them alone.

At Demand Flo we rely on **Show Me You Know Me**. That single mindset lifts our opens to about 44% and replies to 15%. This expanded guide walks through the full approach, adds fresh examples, and answers common questions so you can put the tactics to work right now.

## 1. Why Personal Relevance Wins

Inboxes fill with copy‑and‑paste pitches every day. Decision makers spot generic language in seconds and swipe away. A message that references a prospect's passion for trail running or their latest podcast appearance feels human, and humans reply to humans.

Personal relevance does three things:

- **Cuts through noise:** A specific detail forces the brain to pause and process.
- **Builds trust early:** Proof you researched them shows respect for their time.
- **Opens story loops:** Curiosity rises when a subject line looks like an inside joke.

When prospects experience relevance they reward you with attention.

## 2. The Anatomy of a Winning Cold Email

Below is the framework we teach every rep on Day 1.

### 2.1 Subject Line

The subject line lives or dies in 2 seconds. Make it feel like a private reference, not a generic headline.

**Steps:**
1. Collect 1 personal detail from LinkedIn, X, or a podcast transcript.
2. Pair it with 1 hook like a shared interest or the company name.
3. Write it in plain language. No click bait. No gimmicks.

**Real examples:**
- Kilimanjaro summit photos : HubSpot rev ops (for the CRO who climbs)
- Jazz vinyl : Blue Note + your AI stack (for the CTO who spins records)

### 2.2 First Sentence

The preview window shows subject plus first line, so the opener must keep the curiosity alive.

- **Warm intro:** "Hi Jordan, we haven't met yet, though we both sat in the product‑led growth track at SaaStr last fall."
- **Shared moment:** "Saw your border collie Luna photobomb the earnings call. My shepherd Finn does the exact same mischief on Zoom."

Avoid empty compliments such as "Great thought leadership post." They read as automated.

### 2.3 Value Proposition

Readers care about pain relief, not feature lists.

**Template:** Pain → Outcome → Timeframe

"Many support leaders watch only 1% of cold emails turn into pipeline. Teams that switch to personalized research see 15% within 90 days because each prospect feels the note was typed just for them."

### 2.4 Proof

One line of social proof keeps momentum.

- "G2 crowd ranked us no. 1 in personalized outreach last quarter."
- "Gartner listed us in their Cool Vendors report for 2025."

### 2.5 Courteous Close

Pushy closes create friction. Respect earns meetings.

"Would next week or the week after be better to trade ideas? Pick any day that fits and I'll send an invite."

No naked calendar links. No rigid demand for tomorrow at 14:00.

## 3. Building a Personalization Engine

Hand‑crafted research is gold yet slow. A simple system lets you scale without sounding robotic.

1. **Signal collection:** Pull data from LinkedIn posts, podcast transcripts, conference bios, earnings calls, and recent news.
2. **Nugget surfacing:** Use AI or spreadsheets to flag 2‑3 unique details per prospect: hobbies, alma mater, milestone announcements.
3. **Message library:** Store subject line and opener templates in a doc for quick swapping.
4. **Voice check:** Read each email aloud. If it sounds like a friend wrote it, you are ready to send.

## 4. Measuring Success

Track four core metrics:

1. **Open rate** – shows subject line strength.
2. **Reply rate** – measures overall relevance.
3. **Positive reply rate** – counts any response that moves the deal forward.
4. **Time to first reply** – shorter cycles mean higher curiosity and better intent.

Benchmarks to aim for after applying the playbook:
- ≥ 35% open rate
- ≥ 10% reply rate
- ≥ 5% positive replies

## Final Thought

Cold email is alive and well when every recipient feels seen. Tiny proofs of attention turn anonymous outreach into a real conversation. Follow the steps above, test for a week, and watch replies climb.`,
        excerpt: "Learn how to transform cold email from a numbers game into genuine conversations that convert. Discover the 'Show Me You Know Me' approach that lifts open rates to 44% and reply rates to 15%.",
        category: "Cold Email",
        readTime: "12 min read",
        imageUrl: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        slug: "cold-email-marketing-2025-conversation-converts",
        published: true,
        createdAt: new Date("2024-12-18"),
        updatedAt: new Date("2024-12-18"),
      },
      {
        id: randomUUID(),
        title: "The 3 Biggest Mistakes I See Companies Make with Outbound (And How to Fix Them)",
        content: `Your outbound strategy should be your most predictable revenue driver. Yet most companies are unknowingly sabotaging their own success with the same recurring mistakes.

After analyzing thousands of outbound campaigns and working with companies across every industry, I've identified three critical errors that consistently kill outbound performance. The frustrating part? They're all completely avoidable once you know what to look for.

If your outbound isn't generating the results you expected, chances are you're making at least one of these mistakes.

## Mistake #1: Treating Outbound Like a Numbers Game

**What I see:** Companies blasting out 500+ generic emails per day, thinking that more volume automatically equals more results. They measure success purely by the number of touches, not the quality of responses.

**Why it backfires:** When you prioritize quantity over quality, your emails get ignored, your domain reputation suffers, and you burn through your entire addressable market without building any real relationships.

**The fix:** Shift to a quality-first approach. Instead of 500 generic emails, send 50 highly personalized ones. Research each prospect for 2-3 minutes. Reference their recent company news, their role-specific challenges, or their industry trends. Your response rates will jump from 2% to 15%+ overnight.

**Action step:** Cut your daily outreach volume in half, but double the time you spend on research and personalization for each prospect.

## Mistake #2: Leading with Your Product Instead of Their Problem

**What I see:** Subject lines like "Introducing [Product Name]" and opening lines that immediately dive into features and benefits. The entire message is about what you do, not what they need.

**Why it backfires:** Your prospects don't care about your product – they care about their problems. When you lead with your solution, you're essentially saying "Here's what I want to sell you" instead of "Here's how I can help you."

**The fix:** Start every outreach message by demonstrating you understand their specific situation. Reference a challenge their industry is facing, a goal their role typically has, or a trend affecting their business. Only then introduce how you help companies in similar situations.

**Action step:** Rewrite your email templates to spend the first 2-3 sentences on their world before mentioning yours.

## Mistake #3: Having No Follow-Up Strategy (Or Following Up Too Aggressively)

**What I see:** Either companies send one email and give up, or they follow up every single day with increasingly desperate messages that make prospects want to block them.

**Why it backfires:** Most prospects don't respond to the first email – not because they're not interested, but because they're busy. But aggressive daily follow-ups feel pushy and desperate.

**The fix:** Create a structured follow-up sequence that adds value each time. Follow up 4-6 times over 2-3 weeks, but make each message bring something new to the table – a relevant case study, an industry insight, or a helpful resource.

**Action step:** Map out a 5-touch sequence where each follow-up provides different value, not just "checking in" or "bumping this up."

## The Bottom Line: Quality Always Beats Quantity

Successful outbound isn't about perfecting your sales pitch or finding the "magic" email template. It's about fundamentally shifting how you approach prospects – from someone trying to sell them something to someone genuinely invested in solving their problems.

The companies that master this approach don't just see incremental improvements. They typically see:

- Response rates increase by 300-500%
- Shorter sales cycles due to higher-quality conversations
- Better customer relationships that lead to referrals and expansion
- Sales teams that actually enjoy their outbound work

## Ready to Transform Your Outbound Results?

These three mistakes are just the tip of the iceberg. If you're ready to build an outbound system that consistently generates qualified pipeline, we should talk.

At Demand Flo, we've helped companies transform their outbound from a necessary evil into their most predictable revenue source. Our proven methodology addresses not just these common mistakes, but the deeper strategic and tactical elements that separate top-performing outbound programs from the rest.`,
        excerpt: "Discover the three critical errors that consistently kill outbound performance and learn how to transform your approach from a numbers game into a predictable revenue driver.",
        category: "Outbound Strategy",
        readTime: "8 min read",
        imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        slug: "3-biggest-mistakes-companies-make-outbound",
        published: true,
        createdAt: new Date("2024-12-16"),
        updatedAt: new Date("2024-12-16"),
      },
    ];

    samplePosts.forEach(post => {
      this.blogPosts.set(post.id, post);
    });
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getAllBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values()).sort(
      (a, b) => new Date(b.createdAt || "").getTime() - new Date(a.createdAt || "").getTime()
    );
  }

  async getPublishedBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values())
      .filter(post => post.published)
      .sort((a, b) => new Date(b.createdAt || "").getTime() - new Date(a.createdAt || "").getTime());
  }

  async getBlogPostById(id: string): Promise<BlogPost | undefined> {
    return this.blogPosts.get(id);
  }

  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    return Array.from(this.blogPosts.values()).find(post => post.slug === slug);
  }

  async createBlogPost(insertPost: InsertBlogPost): Promise<BlogPost> {
    const id = randomUUID();
    const now = new Date();
    const post: BlogPost = {
      ...insertPost,
      id,
      published: insertPost.published ?? false,
      createdAt: now,
      updatedAt: now,
    };
    this.blogPosts.set(id, post);
    return post;
  }

  async updateBlogPost(id: string, updateData: Partial<InsertBlogPost>): Promise<BlogPost | undefined> {
    const existingPost = this.blogPosts.get(id);
    if (!existingPost) return undefined;

    const updatedPost: BlogPost = {
      ...existingPost,
      ...updateData,
      updatedAt: new Date(),
    };
    this.blogPosts.set(id, updatedPost);
    return updatedPost;
  }

  async deleteBlogPost(id: string): Promise<boolean> {
    return this.blogPosts.delete(id);
  }

  async createContactSubmission(insertSubmission: InsertContactSubmission): Promise<ContactSubmission> {
    const id = randomUUID();
    const submission: ContactSubmission = {
      ...insertSubmission,
      id,
      phone: insertSubmission.phone ?? null,
      revenueRange: insertSubmission.revenueRange ?? null,
      createdAt: new Date(),
    };
    this.contactSubmissions.set(id, submission);
    return submission;
  }

  async getAllContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contactSubmissions.values()).sort(
      (a, b) => new Date(b.createdAt || "").getTime() - new Date(a.createdAt || "").getTime()
    );
  }
}

export const storage = new MemStorage();
