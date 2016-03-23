package com.tofugear.voodoo360;

import android.graphics.Bitmap;
import android.util.Log;
import android.util.SparseArray;
import android.view.MotionEvent;
import android.view.View;
import android.view.View.OnTouchListener;
import android.widget.ImageView;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;

// import com.bumptech.glide.Glide;
// import com.bumptech.glide.load.engine.DiskCacheStrategy;
// import com.bumptech.glide.load.resource.drawable.GlideDrawable;
// import com.bumptech.glide.request.animation.GlideAnimation;
// import com.bumptech.glide.request.RequestListener;
// import com.bumptech.glide.request.target.SimpleTarget;
// import com.bumptech.glide.request.target.Target;

import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.uimanager.ThemedReactContext;

import javax.annotation.Nullable;

import java.io.File;

import uk.co.senab.photoview.PhotoView;
import uk.co.senab.photoview.PhotoViewAttacher;

import com.squareup.picasso.Picasso;

public class ViewManager extends SimpleViewManager<View> {
    public static final String REACT_CLASS = "RCTVoodoo360";

    private PhotoView photoView;
    private ReadableArray imageURIs;
    private View myView;
    private int index = 0;
    private float moveX = 0.0f; 
    // private SparseArray<Bitmap> resources = new SparseArray<Bitmap>();
    // private EventDispatcher mEventDispatcher;
    // private ResourceDrawableIdHelper mResourceDrawableIdHelper;

    // private ArrayList<String> mImageUrls;

    // private boolean mIsLazyLoading;

    public ViewManager() {
        // mResourceDrawableIdHelper = new ResourceDrawableIdHelper();
    }

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    public PhotoView createViewInstance(ThemedReactContext reactContext) {
        photoView = new PhotoView(reactContext);
        photoView.setOnTouchListener(new OnTouchListener(){
            @Override
            public boolean onTouch(View v, MotionEvent event){
                switch (event.getAction()) {
                    case MotionEvent.ACTION_DOWN:
                      break;
                    case MotionEvent.ACTION_MOVE:
                      int retval = Float.compare(moveX, event.getX());
                      int newIndex= index;
                      if (retval > 0){
                        newIndex -= 1;
                      } else if (retval < 0){
                        newIndex += 1;
                      } else {
                        return true;
                      }

                      moveX = event.getX();

                      if (newIndex >= imageURIs.size()){
                        newIndex = 0;
                      }

                      if (newIndex <= -1){
                        newIndex = imageURIs.size() - 1;
                      }

                      setIndex(newIndex);
                      break;
                    case MotionEvent.ACTION_UP:
                      
                      break;
                    case MotionEvent.ACTION_CANCEL:
                        
                      break;
                    default:
                      break;
                }

                return true;
            }
        });
        return photoView;
    }

    public void setIndex(int newIndex){
        index = newIndex;
        String targetImageURI = imageURIs.getString(newIndex);
        if (targetImageURI == null){
            return ;
        }

        if (targetImageURI.toLowerCase().startsWith("http")){
            Picasso.with(photoView.getContext()).load(targetImageURI).into(photoView); 
        } else {
            File imgFile = new File(targetImageURI);
            if(imgFile.exists()){
                Bitmap myBitmap = BitmapFactory.decodeFile(imgFile.getAbsolutePath());
                photoView.setImageBitmap(myBitmap);
            }
        }
    }

    // In JS this is Image.props.source.uri
    @ReactProp(name = "sources")
    public void setSource(PhotoView view, @Nullable ReadableArray sources) {
        imageURIs = sources;

        setIndex(0);
        // for(int i = 0; i < sources.size(); i++) {
            // Log.i("Voodoo360Log", sources.getString(i));

            // Picasso.with(view.getContext()).load(sources.getString(i)).into(view); 
            // Glide.with(view.getContext())
            //     .load(sources.getString(i))
            //     // .into(new SimpleTarget<GlideDrawable>() {
            //     //     @Override
            //     //     public void onResourceReady(GlideDrawable drawable, String model) {
            //     //         // Log.d("Voodoo360Log", drawable.getCurrent());
            //     //         // photoView.setImageResource(model);
            //     //     }
            //     // })
            //     .into(view)
            // ;

            // Glide
            //     .with(view.getContext())
            //     .load(sources.getString(i))
            //     // .downloadOnly(500,500)
            //     .listener(new RequestListener<String, GlideDrawable>() {
            //         @Override
            //         public boolean onException(Exception e, String model, Target<GlideDrawable> target, boolean isFirstResource) {
            //             return false;
            //         }

            //         @Override
            //         public boolean onResourceReady(GlideDrawable resource, String model, Target<GlideDrawable> target, boolean isFromMemoryCache, boolean isFirstResource) {
            //             Log.i("Voodoo360LogReady", model);
            //             // view.setImageResource(model);
            //             return false;
            //         }
            //     })
            //     .into(view)
            // ;

            // Glide
            //     .with(view.getContext())
            //     .load(sources.getString(i))
            //     .asBitmap()
            //     .fitCenter()
            //     .dontAnimate()
            //     // .into(new SimpleTarget(250, 250) {
            //     //     @Override
            //     //     public boolean onResourceReady(GlideDrawable resource, String model, Target<GlideDrawable> target, boolean isFromMemoryCache, boolean isFirstResource) {
            //     //         Log.i("Voodoo360LogReady", model);
            //     //     }
            //     // })
            //     .into(new SimpleTarget<Bitmap>(250, 250) {
            //         @Override
            //         public void onResourceReady(Bitmap resource, GlideAnimation glideAnimation) {
            //             resources.put(view.getId(), resource);
            //             if (resources.size() == sources.size()) {
            //                 photoView.setImageResource(resources.get(view.getId()));
            //             }
            //             Log.i("Voodoo360LogReady", "true");
            //           //callback.onDone(resource);
            //         }
            //     })
            // ;
        // }

        // view.setImageResource()

        // Glide.with(view.getContext())
        //     .load(sources.getString(0))
        //     .dontAnimate()
        //     .diskCacheStrategy(DiskCacheStrategy.ALL)
        //     .into(view);  


        // view.setOnViewTapListener(new PhotoViewAttacher.OnViewTapListener() {
        //     @Override
        //     public void onViewTap(View view, float x, float y) {
        //         Log.d("Voodoo360Log", "onTap");
        //         // mEventDispatcher.dispatchEvent(
        //         //     new ImageEvent(view.getId(), SystemClock.uptimeMillis(), ImageEvent.ON_TAP)
        //         // );
        //     }
        // });        
    }

    @ReactProp(name = "resizeMode")
    public void setScaleType(PhotoView view, @Nullable String mode) {
        view.setScaleType(ImageView.ScaleType.valueOf(mode));
    }

    // private void preloadImagesToCache() {
    //     if (!mIsLazyLoading) {
    //         if (mImageUrls != null) {

    //         }
    //     }
    // }



    // private Drawable mIcon;
    private float mPosX;
    private float mPosY;
    
    private float mLastTouchX;
    private float mLastTouchY;
    
    // public ViewManager(Context context) {
    //     this(context, null, 0);
    // }
    
    // public ViewManager(Context context, AttributeSet attrs) {
    //     this(context, attrs, 0);
    // }
    
    // public ViewManager(Context context, AttributeSet attrs, int defStyle) {
    //     super(context, attrs, defStyle);
    // }

    // @Override
    // public void onDraw(Canvas canvas) {
    //     canvas.translate(mPosX, mPosY);
    //     super.onDraw(canvas);
    // }
    // @Override
    // public void onDraw() {
    //     Log.i("Voodoo360Log", "onDraw");
    // }

    // @Override
    public boolean onTouch(View v, MotionEvent ev) {
        final int action = ev.getAction();
        switch (action) {
        case MotionEvent.ACTION_DOWN: {
            final float x = ev.getX();
            final float y = ev.getY();
            
            // Remember where we started
            mLastTouchX = x;
            mLastTouchY = y;
            Log.d("Voodoo360Log", "Down - " + imageURIs.toString());
            break;
        }
            
        case MotionEvent.ACTION_MOVE: {
            final float x = ev.getX();
            final float y = ev.getY();
            
            // Calculate the distance moved
            final float dx = x - mLastTouchX;
            final float dy = y - mLastTouchY;
            
            // Move the object
            mPosX += dx;
            mPosY += dy;
            
            // Remember this touch position for the next move event
            mLastTouchX = x;
            mLastTouchY = y;
            
            // Invalidate to request a redraw
            // invalidate();
            Log.d("Voodoo360Log", "Move - " + imageURIs.toString());
            break;
        }
        }
        
        return true;
    }    

}
