"use client";

import Image from "next/image";
import Link from "next/link";
import AnimatedLogo from "../AnimatedLogo";
import styles from "./Footer.module.css";

// Reusable arrow icon using Vector.png
const Arrow = () => (
  <Image
    src="/footer-arrow.png"
    alt=""
    width={6}
    height={9}
    className={styles.arrowIcon}
    aria-hidden="true"
  />
);

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* ── Background Image ── */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/footer-bg.png" alt="" className={styles.footerBgImg} />

      {/* ── Main Grid ── */}
      <div className={styles.footerInner}>
        <div className={styles.footerGrid}>

          {/* ─── COL 1: Logo + Description + Quick Links + Working Hours ─── */}
          <div>
            {/* Animated Logo */}
            <div className={styles.logoWrap}>
              <AnimatedLogo height={36} delay={400} />
            </div>

            <p className={styles.footerDesc}>
              We build innovative digital solutions that help businesses grow,
              scale &amp; succeed in the digital world.
            </p>

            {/* Quick Links */}
            <div className={styles.sectionLabel}>Quick Links</div>
            <ul className={styles.quickLinks}>
              <li><Arrow /><Link href="#">Our Team</Link></li>
              <li>
                <Arrow />
                <Link href="#" className={styles.quickLinkRow}>
                  Careers
                  <Image
                    src="/footer/Frame 2147223242.png"
                    alt="Hiring"
                    width={42}
                    height={18}
                    className={styles.hiringBadge}
                  />
                </Link>
              </li>
              <li><Arrow /><Link href="#">Testimonials</Link></li>
              <li><Arrow /><Link href="#">Case Study</Link></li>
              <li><Arrow /><Link href="#">Contact us</Link></li>
            </ul>

            {/* Working Hours */}
            <div className={styles.sectionLabel} style={{ marginTop: "22px" }}>
              Working Hours
            </div>
            <div className={styles.workingRow}>
              <div className={styles.workingIcon}>
                <Image
                  src="/footer/Group.png"
                  alt="Mon - Sat hours"
                  width={20}
                  height={20}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <span className={styles.workingText}>Mon - Sat : 9AM - 6PM</span>
            </div>
            <div className={styles.workingRow}>
              <div className={styles.workingIcon}>
                <Image
                  src="/footer/fi_8002832.png"
                  alt="Sun - Holiday"
                  width={20}
                  height={20}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <span className={styles.workingText}>Sun - Holiday</span>
            </div>
          </div>

          {/* ─── COL 2: Design Services ─── */}
          <div className={styles.colOffset}>
            <p className={styles.colTitle}>Design Services</p>
            <ul className={styles.linkList}>
              <li><Arrow /><Link href="#">Web Designing</Link></li>
              <li><Arrow /><Link href="#">Ecommerce Website Development</Link></li>
              <li><Arrow /><Link href="#">Software Development</Link></li>
              <li><Arrow /><Link href="#">AI Agent Development Company</Link></li>
              <li><Arrow /><Link href="#">Mobile Apps Development</Link></li>
              <li><Arrow /><Link href="#">WordPress Development</Link></li>
              <li><Arrow /><Link href="#">SaaS Development</Link></li>
              <li><Arrow /><Link href="#">Logo / Graphic Design</Link></li>
              <li><Arrow /><Link href="#">Premium Web Design Company</Link></li>
            </ul>
          </div>

          {/* ─── COL 3: Products ─── */}
          <div className={styles.colOffset}>
            <p className={styles.colTitle}>Products</p>
            <ul className={styles.linkList}>
              <li><Arrow /><Link href="#">Field Service Management</Link></li>
              <li><Arrow /><Link href="#">Learning Management System</Link></li>
              <li><Arrow /><Link href="#">AI SEO Agent</Link></li>
              <li><Arrow /><Link href="#">Job Portal Development</Link></li>
              <li><Arrow /><Link href="#">Shopping Cart Software</Link></li>
              <li><Arrow /><Link href="#">ERP Software</Link></li>
              <li><Arrow /><Link href="#">Food Delivery Software</Link></li>
              <li><Arrow /><Link href="#">Inventory Management Software</Link></li>
              <li><Arrow /><Link href="#">CRM Software</Link></li>
            </ul>
          </div>

          {/* ─── COL 4: Digital Marketing ─── */}
          <div className={styles.colOffset}>
            <p className={styles.colTitle}>Digital Marketing</p>
            <ul className={styles.linkList}>
              <li><Arrow /><Link href="#">Digital Marketing</Link></li>
              <li><Arrow /><Link href="#">Search Engine Optimization</Link></li>
              <li><Arrow /><Link href="#">Social Media Marketing</Link></li>
              <li><Arrow /><Link href="#">PPC Marketing</Link></li>
              <li><Arrow /><Link href="#">Performance Marketing</Link></li>
              <li><Arrow /><Link href="#">B2B/Saas Marketing</Link></li>
              <li><Arrow /><Link href="#">Branding Service</Link></li>
              <li><Arrow /><Link href="#">Business Consultant</Link></li>
              <li><Arrow /><Link href="#">Digital Transformation</Link></li>
            </ul>
          </div>

          {/* ─── COL 5: Address + Enquiries ─── */}
          <div className={styles.colOffset}>
            <p className={styles.colTitle}>Address</p>
            <div className={styles.contactRow}>
              <div className={styles.contactIcon}>
                <Image
                  src="/footer/Vector (1).png"
                  alt="Address Icon"
                  width={14}
                  height={18}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className={styles.contactText}>
                Webnox Technologies<br />
                No 721/2, Venky complex,<br />
                Second floor, cross-cut road,<br />
                Seth Narang Das Layout,<br />
                Coimbatore – 641 012.
              </div>
            </div>

            <p className={styles.colTitle} style={{ marginTop: "16px" }}>For Business Enquiries</p>
            <div className={styles.contactRow}>
              <div className={styles.contactIcon}>
                <Image
                  src="/footer/Vector (2).png"
                  alt="Phone Icon"
                  width={16}
                  height={16}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className={styles.contactText}>
                <a href="tel:+916380072252">+91 63800 72252</a><br />
                <a href="tel:+919585125566">+91 9585125566</a><br />
                <a href="tel:+919778657739">+91 97786 57739</a>
              </div>
            </div>
            <div className={styles.contactRow}>
              <div className={styles.contactIcon}>
                <Image
                  src="/footer/fi_712040.png"
                  alt="Email Icon"
                  width={16}
                  height={16}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className={styles.contactText}>
                <a href="mailto:contact@webnox.in">contact@webnox.in</a><br />
                <a href="mailto:sales@webnox.in">sales@webnox.in</a><br />
                <a href="mailto:bde@webnox.in">bde@webnox.in</a>
              </div>
            </div>

            <p className={styles.colTitle} style={{ marginTop: "12px" }}>Job Enquiry</p>
            <div className={styles.contactRow}>
              <div className={styles.contactIcon}>
                <Image
                  src="/footer/Vector (2).png"
                  alt="Phone Icon"
                  width={16}
                  height={16}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className={styles.contactText}>
                <a href="tel:+916374382502">+91 63743 82502</a><br />
                <span className={styles.contactNote}>(Whatsapp Only)</span>
              </div>
            </div>
            <div className={styles.contactRow}>
              <div className={styles.contactIcon}>
                <Image
                  src="/footer/fi_712040.png"
                  alt="Email Icon"
                  width={16}
                  height={16}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className={styles.contactText}>
                <a href="mailto:careers@webnox.in">careers@webnox.in</a>
              </div>
            </div>
          </div>

          {/* ─── Partner Logos (spans columns 1 to 4) ─── */}
          <div className={styles.partnerGridCell}>
            <div className={styles.partnerContainer}>
              <Image
                src="/footer/Frame 2147223219.png"
                alt="Our Associations"
                width={820}
                height={96}
                className={styles.partnerImg}
              />
            </div>
          </div>

          {/* ─── Follow Us (column 5, aligned with partner card) ─── */}
          <div className={styles.followGridCell}>
            <div className={styles.followTitle}>Follow Us</div>
            <div className={styles.socialRow}>
              <a href="#" className={styles.socialBtn} aria-label="Instagram">
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="rgba(200,215,240,0.7)" strokeWidth="1.5" />
                  <circle cx="12" cy="12" r="4" stroke="rgba(200,215,240,0.7)" strokeWidth="1.5" />
                  <circle cx="17.5" cy="6.5" r="1" fill="rgba(200,215,240,0.7)" />
                </svg>
              </a>
              <a href="#" className={styles.socialBtn} aria-label="Facebook">
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" stroke="rgba(200,215,240,0.7)" strokeWidth="1.5" />
                </svg>
              </a>
              <a href="#" className={styles.socialBtn} aria-label="YouTube">
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
                  <rect x="2" y="5" width="20" height="14" rx="4" stroke="rgba(200,215,240,0.7)" strokeWidth="1.5" />
                  <path d="M10 9l5 3-5 3V9z" fill="rgba(200,215,240,0.7)" />
                </svg>
              </a>
              <a href="#" className={styles.socialBtn} aria-label="LinkedIn">
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="4" stroke="rgba(200,215,240,0.7)" strokeWidth="1.5" />
                  <path d="M8 11v5M8 8v.5M12 16v-5m0 0c0-1.5 4-1.5 4 0v5" stroke="rgba(200,215,240,0.7)" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom Strip ── */}
      <div className={styles.footerBottom}>
        <div className={styles.bottomLeft}>
          <Link href="#">Refund / cancellation Policy</Link>
          <span>|</span>
          <Link href="#">Privacy policy</Link>
        </div>
        <div className={styles.bottomRight}>
          © 2026 - Webnox Technologies. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
