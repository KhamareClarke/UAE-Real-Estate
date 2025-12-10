# 🔧 Form Display Troubleshooting

## ✅ Changes Made to Fix Form Display

### 1. **Changed Layout Type**
- **Before:** `data-layout="{'id':'POPUP'}"`
- **After:** `data-layout="{'id':'INLINE'}"`
- **Why:** INLINE layout displays better in modals

### 2. **Increased Height**
- **Before:** `height: '520px'`
- **After:** `height: '600px'` with `minHeight: '600px'`
- **Why:** More space for form fields

### 3. **Added White Background**
- **Added:** `className="... bg-white p-4 sm:p-6"`
- **Why:** Better contrast for form visibility

### 4. **Added Form Reinitialization**
- **Added:** useEffect to reinitialize form when modal opens
- **Why:** Ensures form script runs after modal appears

---

## 🔍 If Form Still Not Showing

### Quick Checks:

#### 1. **Open Browser Console**
Press `F12` and check for errors:
- Look for any red error messages
- Check if script loaded: `https://link.msgsndr.com/js/form_embed.js`

#### 2. **Check Network Tab**
- Open DevTools → Network tab
- Click button to open modal
- Look for the form iframe request
- Should see: `https://api.leadconnectorhq.com/widget/form/7RM5Dr1meRUfG03B13ci`

#### 3. **Verify Script Loaded**
In console, type:
```javascript
console.log(document.querySelector('script[src*="form_embed.js"]'));
```
Should return the script element, not null.

---

## 🎯 Alternative Solution: Direct Embed

If the iframe still doesn't show, try this alternative approach:

### Option 1: Use div-based embed instead of iframe

Replace the iframe section with:

```typescript
{/* Form Container */}
<div className="relative w-full bg-white p-4 sm:p-6" style={{ minHeight: '600px' }}>
  <div 
    className="ghl-form-container"
    data-form-id="7RM5Dr1meRUfG03B13ci"
  />
</div>
```

### Option 2: Load form in new tab

Change button to:

```typescript
<motion.button
  onClick={() => window.open('https://api.leadconnectorhq.com/widget/form/7RM5Dr1meRUfG03B13ci', '_blank')}
  className="..."
>
  Request Private Access
</motion.button>
```

### Option 3: Use direct link

```typescript
<a 
  href="https://api.leadconnectorhq.com/widget/form/7RM5Dr1meRUfG03B13ci"
  target="_blank"
  rel="noopener noreferrer"
  className="..."
>
  Request Private Access
</a>
```

---

## 🔧 Debug Steps

### Step 1: Check if Modal Opens
```typescript
// Add console.log to openBookingModal
const openBookingModal = () => {
  console.log('Modal opening...'); // Add this
  setShowBookingModal(true);
  document.body.style.overflow = 'hidden';
};
```

### Step 2: Check if Iframe Loads
```typescript
// Add onLoad handler to iframe
<iframe
  src="https://api.leadconnectorhq.com/widget/form/7RM5Dr1meRUfG03B13ci"
  onLoad={() => console.log('Form iframe loaded!')} // Add this
  // ... other props
/>
```

### Step 3: Check Form URL Directly
Open this URL in a new tab:
```
https://api.leadconnectorhq.com/widget/form/7RM5Dr1meRUfG03B13ci
```

If it loads there, the issue is with the embed. If not, the form ID might be wrong.

---

## 🎨 Visual Debugging

### Add Visible Border to See Container

```typescript
<div 
  className="relative w-full bg-white p-4 sm:p-6 border-4 border-red-500" // Add red border
  style={{ minHeight: '600px', maxHeight: 'calc(90vh - 140px)', overflowY: 'auto' }}
>
```

This will show you if the container is rendering.

---

## 📋 Common Issues & Solutions

### Issue 1: White Screen in Modal
**Cause:** Iframe not loading
**Solution:** Check form ID is correct

### Issue 2: Modal Opens But Empty
**Cause:** Script not loaded yet
**Solution:** Increase timeout in useEffect (500ms → 1000ms)

### Issue 3: Form Appears Then Disappears
**Cause:** Script conflict
**Solution:** Remove script cleanup in useEffect

### Issue 4: Form Too Small
**Cause:** Height too low
**Solution:** Increase height to 700px or 800px

### Issue 5: Scrollbar Issues
**Cause:** Container height conflicts
**Solution:** Set `overflow: 'hidden'` on iframe

---

## 🚀 Recommended: Test Form URL First

### Step 1: Test Direct URL
Open in browser:
```
https://api.leadconnectorhq.com/widget/form/7RM5Dr1meRUfG03B13ci
```

### Step 2: If Form Loads
✅ Form ID is correct
✅ Form is active
✅ Issue is with embed code

### Step 3: If Form Doesn't Load
❌ Check form ID in LeadConnector
❌ Verify form is published
❌ Check form permissions

---

## 🔄 Alternative: Simple Modal with Link

If all else fails, use this simple approach:

```typescript
{/* Modal Content */}
<motion.div className="relative w-full max-w-2xl bg-white rounded-2xl p-8 text-center">
  <button onClick={closeBookingModal} className="absolute top-4 right-4">
    <svg className="w-6 h-6">...</svg>
  </button>
  
  <h2 className="text-3xl font-bold mb-4">Request Private Access</h2>
  <p className="text-lg mb-6">Click below to fill out our form</p>
  
  <a
    href="https://api.leadconnectorhq.com/widget/form/7RM5Dr1meRUfG03B13ci"
    target="_blank"
    rel="noopener noreferrer"
    className="btn-primary inline-block px-8 py-4 text-lg"
  >
    Open Form
  </a>
</motion.div>
```

---

## 📞 Next Steps

### If Form Shows Now:
✅ Test on different browsers
✅ Test on mobile
✅ Test form submission
✅ Verify data in LeadConnector

### If Form Still Hidden:
1. Check browser console for errors
2. Test form URL directly in browser
3. Try alternative solutions above
4. Contact LeadConnector support for embed code

---

## 🎯 Quick Test Checklist

- [ ] Modal opens when button clicked
- [ ] White container visible in modal
- [ ] Iframe element exists in DOM
- [ ] Form URL loads in new tab
- [ ] Script loaded (check Network tab)
- [ ] No console errors
- [ ] Form ID is correct: `7RM5Dr1meRUfG03B13ci`

---

**Try opening the modal now and check if the form appears!** 🚀

If you still see a blank space, let me know what you see in the browser console (F12).
